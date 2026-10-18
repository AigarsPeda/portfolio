import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still works when browser storage is unavailable.
    }
  };

  return (
    <button
      className="theme-toggle icon-button"
      type="button"
      onClick={toggleTheme}
      aria-label="Switch color theme"
    >
      <FiSun className="theme-icon-light" aria-hidden="true" />
      <FiMoon className="theme-icon-dark" aria-hidden="true" />
    </button>
  );
}
