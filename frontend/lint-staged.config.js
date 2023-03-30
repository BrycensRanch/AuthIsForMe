module.exports = {
	"*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
	"**/*.ts?(x)": () => "npm run check-types",
	"*.{json,md,yaml,yml}": ["prettier --write"],
};
