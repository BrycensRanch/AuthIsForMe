import {useLayoutEffect, useState } from "react";
import usePrefersColorScheme from 'use-prefers-color-scheme'


function useDarkMode() {
		let prefersColorScheme = usePrefersColorScheme()
	if (prefersColorScheme === 'no-preference') prefersColorScheme = 'dark'
  const [theme, setTheme] = useState(
    typeof window === "undefined" ? prefersColorScheme : localStorage.theme
	);


  const colorTheme = theme === "dark" ? "light" : "dark";

  useLayoutEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;