import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProjectCursor() {
  const router = useRouter();
  const [cursor, setCursor] = useState({ label: "", visible: false });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 240, damping: 30, mass: 0.5 });

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let activeLink: HTMLAnchorElement | null = null;

    const hide = () => {
      if (!activeLink) return;
      activeLink = null;
      setCursor((previous) => ({ ...previous, visible: false }));
    };
    const updatePreference = () => {
      if (!media.matches) hide();
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") {
        hide();
        return;
      }
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[data-cursor-label]")
          : null;
      if (!link || link.closest("[inert]")) {
        hide();
        return;
      }
      x.set(event.clientX);
      y.set(event.clientY);
      if (link !== activeLink) {
        if (!activeLink) {
          springX.jump(event.clientX);
          springY.jump(event.clientY);
        }
        activeLink = link;
        setCursor({
          label: link.dataset.cursorLabel ?? "View project",
          visible: true,
        });
      }
    };
    const leaveWindow = (event: PointerEvent) => {
      if (!event.relatedTarget) hide();
    };

    updatePreference();
    media.addEventListener("change", updatePreference);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", leaveWindow, { passive: true });
    window.addEventListener("pointerdown", hide, { passive: true });
    window.addEventListener("scroll", hide, { passive: true, capture: true });
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", hide);
    document.addEventListener("visibilitychange", hide);
    router.events.on("routeChangeStart", hide);
    return () => {
      media.removeEventListener("change", updatePreference);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", leaveWindow);
      window.removeEventListener("pointerdown", hide);
      window.removeEventListener("scroll", hide, true);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", hide);
      document.removeEventListener("visibilitychange", hide);
      router.events.off("routeChangeStart", hide);
    };
  }, [router.events, x, y, springX, springY]);

  return (
    <motion.div
      className="project-cursor"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    >
      <motion.span
        className="project-cursor-circle"
        initial={false}
        animate={{
          opacity: cursor.visible ? 1 : 0,
          scale: cursor.visible ? 1 : 0,
        }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        // Keep the pointer inside the lower-right quadrant, clear of the label.
        style={{ x: "-70%", y: "-70%" }}
      >
        {cursor.label}
      </motion.span>
    </motion.div>
  );
}
