import { useEffect, useState } from 'react';

const UseLocalStorage = (key: string, initialValue: any) => {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			try {
				return item ? JSON.parse(item) : initialValue;
			} catch {
				return item || initialValue;
			}
		} catch (error) {
			// If error also return initialValue
			console.error(error);
			return initialValue;
		}
	});

	// useEffect to update local storage when the state changes
	useEffect(() => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore = typeof storedValue === 'function' ? storedValue(storedValue) : storedValue;
			// Save state
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.error(error);
		}
	}, [key, storedValue]);

	// Immutable at runtime and design time
	const hooks = [storedValue, setStoredValue] as const;
	return Object.freeze(hooks);
};

export default UseLocalStorage;
