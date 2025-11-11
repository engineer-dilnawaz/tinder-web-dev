const themes = ["dark", "forest", "luxury", "black", "light"];

export const useThemeToggler = () => {
  const activeTheme = localStorage.getItem("theme") || "dark";

  const handleThemeChange = (theme: string) => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return { activeTheme, handleThemeChange, themes };
};
