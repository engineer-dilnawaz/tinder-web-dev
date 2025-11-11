type ThemeToggleItemProps = {
  theme: string;
  handleThemeChange: (theme: string) => void;
};

export const ThemeToggleItem = ({
  theme,
  handleThemeChange,
}: ThemeToggleItemProps) => {
  return (
    <li>
      <input
        onChange={() => handleThemeChange(theme)}
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start capitalize"
        aria-label={theme}
        value={theme}
      />
    </li>
  );
};
