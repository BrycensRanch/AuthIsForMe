import type { JestConfigWithTsJest } from 'ts-jest';

export const coverageThreshold = {
	global: {
		lines: 80,
		statements: 80,
		branches: 70,
		functions: 80,
	},
};

const jestConfig: JestConfigWithTsJest = {
	preset: 'ts-jest/presets/js-with-ts-esm',
	testEnvironment: 'node',
	resolver: 'jest-ts-webcompat-resolver',
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'./routes/**/*.{js,ts, mts, mjs, cjs, cts}',
		'./plugins/**/*.{js,ts, mts, mjs, cjs, cts}',
		'./app.{js,ts, mts, mjs, cjs, cts}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	testMatch: ['**/*.test.ts'],
	moduleNameMapper: {
		// Handle module aliases (this will be automatically configured for you soon)
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@/public/(.*)$': '<rootDir>/public/$1',
	},
	transform: {
		// ".(t|j)s$": "babel-jest",
		// '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
		// '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
		'^.+\\.m?[tj]sx?$': [
			'ts-jest',
			{
				useESM: true,
			},
		],
	},
};
export default jestConfig;
