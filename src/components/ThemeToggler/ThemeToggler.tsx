import { ChevronDown } from "../../assets";
import { ThemeToggleItem } from "./ThemeToggleItem";
import { useThemeToggler } from "./useThemeToggler";

export const ThemeToggler = () => {
  const { activeTheme, handleThemeChange, themes } = useThemeToggler();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn rounded-lg bg-base-100">
        <span className="capitalize badge badge-soft badge-primary">
          {activeTheme}
        </span>
        <ChevronDown />
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        {themes.map((theme) => (
          <ThemeToggleItem
            key={theme}
            theme={theme}
            handleThemeChange={handleThemeChange}
          />
        ))}
      </ul>
    </div>
  );
};
