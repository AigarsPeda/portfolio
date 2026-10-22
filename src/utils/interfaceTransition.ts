type ChangeKind = "theme" | "language";
type Origin = { x: number; y: number };
type ActiveChange = { finished: Promise<void>; skipTransition: () => void };

let activeChange: ActiveChange | undefined;
let latestRequest = 0;

// Project images and names stay visible while translated copy is exchanged.
const languageCopySelector = [
  "main h1:not(.case-title)",
  "main h2",
  ".story-copy h3",
  ".about-copy h3",
  "main p",
  "main dt",
  "main dd",
  "figcaption",
  ".site-nav a",
  ".language-switch",
  ".circle-link > span",
  ".contact-heading h2",
  ".contact-circle > span",
  ".case-actions a",
  ".footer-bottom > a",
  ".project-row-action",
  ".back-link",
].join(",");

export function waitForLocaleCommit(locale: string): Promise<void> {
  const app = document.querySelector<HTMLElement>("[data-interface-locale]");
  if (!app || app.dataset.interfaceLocale === locale) return Promise.resolve();
  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      if (app.dataset.interfaceLocale === locale) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(app, {
      attributes: true,
      attributeFilter: ["data-interface-locale"],
    });
  });
}

function createLanguageReveal(
  update: () => void | Promise<void>,
): ActiveChange {
  let skipped = false;
  const animations: Animation[] = [];
  const cancel = () => animations.forEach((animation) => animation.cancel());
  const play = (id: string, frames: Keyframe[], duration: number) => {
    if (skipped) return [];
    return Array.from(
      document.querySelectorAll<HTMLElement>(languageCopySelector),
      (element) => {
        const animation = element.animate(frames, {
          duration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "both",
        });
        animation.id = id;
        animations.push(animation);
        return animation;
      },
    );
  };
  const finished = (async () => {
    try {
      const outgoing = play(
        "language-copy-out",
        [
          { opacity: 1, clipPath: "inset(0)" },
          { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        ],
        140,
      );
      await Promise.allSettled(outgoing.map((animation) => animation.finished));
      await update();
      const incoming = play(
        "language-copy-in",
        [
          {
            opacity: 0,
            clipPath: "inset(100% 0 0 0)",
            transform: "translateY(6px)",
          },
          { opacity: 1, clipPath: "inset(0)", transform: "translateY(0)" },
        ],
        380,
      );
      outgoing.forEach((animation) => animation.cancel());
      await Promise.allSettled(incoming.map((animation) => animation.finished));
    } finally {
      cancel();
    }
  })();
  return {
    finished,
    skipTransition: () => {
      skipped = true;
      cancel();
    },
  };
}

export async function animateInterfaceChange(
  kind: ChangeKind,
  update: () => void | Promise<void>,
  origin?: Origin,
): Promise<void> {
  const applyUpdate = async () => {
    const { scrollX, scrollY } = window;
    await update();
    if (kind === "language") {
      // The Pages Router defers fragment scrolling until after the locale commit.
      await new Promise<void>((resolve) => window.setTimeout(resolve, 0));
    }
    window.scrollTo({ left: scrollX, top: scrollY, behavior: "instant" });
  };
  const request = ++latestRequest;
  const previous = activeChange;
  if (previous) {
    previous.skipTransition();
    await previous.finished.catch(() => {});
  }
  if (
    request !== latestRequest ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    (kind === "theme" && !document.startViewTransition)
  ) {
    await applyUpdate();
    return;
  }

  const root = document.documentElement;
  root.dataset.interfaceTransition = kind;
  let change: ActiveChange | undefined;
  try {
    if (kind === "language") {
      change = createLanguageReveal(applyUpdate);
      activeChange = change;
    } else {
      const point = origin ?? { x: innerWidth / 2, y: innerHeight / 2 };
      const radius = Math.hypot(
        Math.max(point.x, innerWidth - point.x),
        Math.max(point.y, innerHeight - point.y),
      );
      root.style.setProperty("--theme-reveal-x", `${point.x}px`);
      root.style.setProperty("--theme-reveal-y", `${point.y}px`);
      root.style.setProperty("--theme-reveal-radius", `${radius}px`);

      // CSS masks the new snapshot from its first paint, before ready resolves.
      const transition = document.startViewTransition(applyUpdate);
      change = transition;
      activeChange = change;
      // A skipped snapshot must not prevent the theme from changing.
      void transition.ready.catch(() => {});
    }
    await change.finished;
  } finally {
    if (activeChange === change) {
      delete root.dataset.interfaceTransition;
      root.style.removeProperty("--theme-reveal-x");
      root.style.removeProperty("--theme-reveal-y");
      root.style.removeProperty("--theme-reveal-radius");
      activeChange = undefined;
    }
  }
}
