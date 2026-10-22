import { useCopy } from "~/i18n";
import { FiMoon, FiSun } from "react-icons/fi";
import { animateInterfaceChange } from "~/utils/interfaceTransition";
import type { MouseEvent } from "react";
import { cancelSectionScroll } from "~/utils/sectionScroll";

export default function ThemeToggle() {
  const copy = useCopy();
  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    cancelSectionScroll();
    const bounds = event.currentTarget.getBoundingClientRect();
    void animateInterfaceChange(
      "theme",
      () => {
        const root = document.documentElement;
        const theme = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = theme;
        try {
          localStorage.setItem("portfolio-theme", theme);
        } catch {
          // The selected theme still works when browser storage is unavailable.
        }
      },
      { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 },
    );
  };

  return (
    <button
      className="theme-toggle icon-button"
      type="button"
      onClick={toggleTheme}
      aria-label={copy.theme}
    >
      <FiSun className="theme-icon-light" aria-hidden="true" />
      <FiMoon className="theme-icon-dark" aria-hidden="true" />
    </button>
  );
}
