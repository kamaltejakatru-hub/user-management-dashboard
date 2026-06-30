import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}

export default ThemeToggle;