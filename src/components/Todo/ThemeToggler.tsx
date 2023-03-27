import React, { useContext } from "react";
import { Context } from "@/context/index";

function ThemeToggler() {
  const { theme, setTheme } = useContext(Context);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <img
      src={theme === "light" ? "/icon-moon.svg" : "/icon-sun.svg"}
      alt="theme"
      height={24}
      width={24}
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  );
}

export default ThemeToggler;
