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
  ".project-category",
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
    await update();
    return;
  }

  const root = document.documentElement;
  root.dataset.interfaceTransition = kind;
  let change: ActiveChange | undefined;
  try {
    if (kind === "language") {
      change = createLanguageReveal(update);
      activeChange = change;
    } else {
      const transition = document.startViewTransition(update);
      change = transition;
      activeChange = change;
      try {
        await transition.ready;
        if (origin) {
          const radius = Math.hypot(
            Math.max(origin.x, innerWidth - origin.x),
            Math.max(origin.y, innerHeight - origin.y),
          );
          root.animate(
            {
              clipPath: [
                `circle(0px at ${origin.x}px ${origin.y}px)`,
                `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
              ],
            },
            {
              duration: 800,
              easing: "cubic-bezier(0.76, 0, 0.24, 1)",
              pseudoElement: "::view-transition-new(root)",
            },
          );
        }
      } catch {
        // Skipped snapshots must not prevent the theme from changing.
      }
    }
    await change.finished;
  } finally {
    if (activeChange === change) {
      delete root.dataset.interfaceTransition;
      activeChange = undefined;
    }
  }
}
