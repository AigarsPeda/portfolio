import { useEffect, useRef } from "react";

export default function TextFill({ text }: { text: string }) {
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let cancelled = false;
    void document.fonts.ready.then(() => {
      const element = label.current;
      if (cancelled || !element) return;
      const style = getComputedStyle(element);
      const context = document.createElement("canvas").getContext("2d");
      if (!context) return;
      context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const metrics = context.measureText(text);
      const size = parseFloat(style.fontSize);
      const lineHeight = parseFloat(style.lineHeight) || size * 1.2;
      const baseline =
        (lineHeight +
          metrics.fontBoundingBoxAscent -
          metrics.fontBoundingBoxDescent) /
        2;
      if (!Number.isFinite(baseline)) return;
      // Measure the ink, not the line box's empty space. Em values scale on mobile.
      element.style.setProperty(
        "--text-ink-top",
        `${(baseline - metrics.actualBoundingBoxAscent) / size}em`,
      );
      element.style.setProperty(
        "--text-ink-bottom",
        `${(baseline + metrics.actualBoundingBoxDescent) / size}em`,
      );
    });
    return () => {
      cancelled = true;
    };
  }, [text]);

  return (
    <span className="text-fill" ref={label}>
      {text}
      <span className="text-fill-overlay" aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
