import nextJest from 'next/jest';

// fuck you
const esmModules = ['skinview3d', 'skinview3d@3.0.0-alpha.1'];

const babelConfig = require('./babel.config');

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

const customJestConfig = {
	moduleNameMapper: {
		// Handle module aliases (this will be automatically configured for you soon)
		'^@/(.*)$': '<rootDir>/$1',

		'^@/public/(.*)$': '<rootDir>/public/$1',

		// Handle CSS imports (with CSS modules)
		// https://jestjs.io/docs/webpack#mocking-css-modules
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

		// Handle CSS imports (without CSS modules)
		'^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

		// Handle image imports
		// https://jestjs.io/docs/webpack#handling-static-assets
		'^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': '<rootDir>/__mocks__/fileMock.js',
	},
	transform: {
		// Use babel-jest to transpile tests with the next/babel preset
		// https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', babelConfig],
	},
	transformIgnorePatterns: [`node_modules/(?!(?:.pnpm/)?(${esmModules.join('|')}))`],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

	// if using TypeScript with a baseUrl set to the root directory then you need the snippet below for alias' to work
	// moduleDirectories: ['node_modules', '<rootDir>/'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'!./src/**/_*.{js,jsx,ts,tsx}',
		// Honestly gonna let Cypress handle this mess.
		// I don't want to write tests for an experimental part of the app
		'!./src/components/dash/*.{js,jsx,ts,tsx}',
		// Not part of our application, they're there for imports
		'!./src/js/**/*.{js,jsx,ts,tsx}',
		// Client side only, Jest can't seem to properly test this due to ESM weirdness...
		'!./src/components/**/SkinViewer.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	coverageProvider: 'v8',
	coverageDirectory: 'jest-coverage',
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
	},
  testEnvironment: '@happy-dom/jest-environment'
};

module.exports = createJestConfig(customJestConfig);
