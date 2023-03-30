module.exports = {
	"*.{js,jsx,ts,tsx}": () => "pnpm lint-staged",
	"**/*.ts?(x)": () => "pnpm check-types",
	"*.{json,md,yaml,yml}": "prettier --write",
};
