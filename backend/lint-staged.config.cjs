module.exports = {
	'*.{js,jsx,ts,mts,cts,cjs,mjs,tsx}': ['eslint --fix', 'prettier --write'],
	'**/*.ts?(x)': () => 'pnpm check-types',
	'*.{json,md,yaml,yml}': 'prettier --write',
};
