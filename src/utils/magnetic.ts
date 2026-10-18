import type { PointerEvent } from "react";

export function resetMagnetic(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--magnetic-x", "0px");
  event.currentTarget.style.setProperty("--magnetic-y", "0px");
}

export function moveMagnetic(event: PointerEvent<HTMLElement>) {
  if (
    event.pointerType !== "mouse" ||
    window.matchMedia(
      "(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)",
    ).matches
  ) {
    resetMagnetic(event);
    return;
  }

  // Measure the stationary hit area, so the moving content cannot chase itself.
  const target = event.currentTarget;
  const bounds = target.getBoundingClientRect();
  const strength = Number(target.dataset.magneticStrength ?? 8);
  const x = Math.max(
    -1,
    Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2),
  );
  const y = Math.max(
    -1,
    Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2),
  );

  target.style.setProperty("--magnetic-x", `${(x * strength).toFixed(2)}px`);
  target.style.setProperty("--magnetic-y", `${(y * strength).toFixed(2)}px`);
}
