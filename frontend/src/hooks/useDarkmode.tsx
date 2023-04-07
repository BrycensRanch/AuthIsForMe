import { useLayoutEffect, useState } from 'react';
import usePrefersColorScheme from 'use-prefers-color-scheme';

import UseLocalStorage from './useLocalStorage';

const useDarkMode = () => {
	let prefersColorScheme = 'dark';
	if (typeof window !== 'undefined' && window.matchMedia !== undefined) {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		prefersColorScheme = usePrefersColorScheme();
	}
	if (prefersColorScheme === 'no-preference') prefersColorScheme = 'dark';
	const [theme, setTheme] = useState<string>(
		typeof window === 'undefined' ? prefersColorScheme : (localStorage.theme as string),
	);

	const colorTheme = theme === 'dark' ? 'light' : 'dark';

	useLayoutEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(colorTheme);
		root.classList.add(theme);

		if (typeof window !== 'undefined') {
      UseLocalStorage('theme', theme);
		}
	}, [theme]);

	// Immutable at runtime and design time
	const hooks = [colorTheme, setTheme] as const;
	return Object.freeze(hooks);
};

export default useDarkMode;
