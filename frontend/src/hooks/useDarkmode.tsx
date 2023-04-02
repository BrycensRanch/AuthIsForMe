import { useLayoutEffect, useState } from 'react';
import usePrefersColorScheme from 'use-prefers-color-scheme';

const useDarkMode = () => {
  		let prefersColorScheme = usePrefersColorScheme();
	if (prefersColorScheme === 'no-preference') prefersColorScheme = 'dark';
  const [theme, setTheme] = useState<string>(
    typeof window === 'undefined' ? prefersColorScheme : localStorage.theme as string
	);


  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useLayoutEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Immutable at runtime and design time
  const hooks = [colorTheme, setTheme] as const;
  return Object.freeze(hooks);
};

export default useDarkMode;