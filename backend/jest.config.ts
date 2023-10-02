import type { JestConfigWithTsJest } from 'ts-jest';

export const coverageThreshold = {
	global: {
		lines: 0,
		statements: 0,
		branches: 0,
		functions: 0,
	},
};

const jestConfig: JestConfigWithTsJest = {
	preset: 'ts-jest/presets/js-with-ts-esm',
	testEnvironment: 'node',
	resolver: 'jest-ts-webcompat-resolver',
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'./app.{js,ts,mts,mjs,cjs,cts}',
		'**/*.service.{js,ts,mts,mjs,cjs,cts}',
		'**/*.controller.{js,ts,mts,mjs,cjs,cts}',
		'!**/*.d.ts',
		'!**/dist/**',
		'!**/node_modules/**',
	],
	coverageThreshold,
	testMatch: ['**/*.test.ts'],
	// moduleNameMapper: {
	// 	// Handle module aliases (this will be automatically configured for you soon)
	// 	'^@/(.*)$': '<rootDir>/src/$1',
	// 	'^@/public/(.*)$': '<rootDir>/public/$1',
	// },
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
