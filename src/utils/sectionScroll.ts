import { animate } from "framer-motion";

let stopActiveScroll: (() => void) | undefined;

export function cancelSectionScroll() {
  stopActiveScroll?.();
}

export function scrollToSection(hash: string) {
  cancelSectionScroll();
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;

  const start = window.scrollY;
  const padding =
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) ||
    0;
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const end = Math.max(
    0,
    Math.min(
      start + target.getBoundingClientRect().top - padding - margin,
      document.documentElement.scrollHeight - window.innerHeight,
    ),
  );
  const focusTarget = () => {
    const hadTabIndex = target.hasAttribute("tabindex");
    if (!hadTabIndex) {
      target.setAttribute("tabindex", "-1");
      target.addEventListener(
        "blur",
        () => target.removeAttribute("tabindex"),
        {
          once: true,
        },
      );
    }
    target.focus({ preventScroll: true });
  };

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    Math.abs(end - start) < 1
  ) {
    window.scrollTo({ top: end, behavior: "instant" });
    focusTarget();
    return;
  }

  const cleanup = () => {
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("pointerdown", stop);
    window.removeEventListener("keydown", stop);
    if (stopActiveScroll === stop) stopActiveScroll = undefined;
  };
  const animation = animate(start, end, {
    duration: 1.75,
    ease: [0.65, 0, 0.35, 1],
    // Bypass CSS smooth scrolling so it does not compete with this animation.
    onUpdate: (top) => window.scrollTo({ top, behavior: "instant" }),
    onComplete: () => {
      cleanup();
      focusTarget();
    },
  });
  const stop = () => {
    animation.stop();
    cleanup();
  };
  stopActiveScroll = stop;
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("pointerdown", stop, { passive: true });
  window.addEventListener("keydown", stop);
}
