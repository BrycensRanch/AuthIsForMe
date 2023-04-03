module.exports = {
	"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
	"**/*.ts?(x)": () => "pnpm check-types",
	"*.{json,md,yaml,yml,css}": "prettier --write",
};
