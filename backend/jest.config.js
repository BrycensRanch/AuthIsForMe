/** @type {import('ts-jest').JestConfigWithTsJest} */
export const preset = 'ts-jest/presets/js-with-ts-esm';
export const testEnvironment = 'node';
export const globals = {
  'ts-jest': {
    useESM: true,
  },
};
export const coverageThreshold = {
  global: {
    branches: 50,
    functions: 50,
    lines: 70,
    statements: 70,
  },
};
export const resolver = 'jest-ts-webcompat-resolver';
export const moduleNameMapper = {
  // Handle module aliases (this will be automatically configured for you soon)
  '^@/(.*)$': '<rootDir>/src/$1',

  '^@/public/(.*)$': '<rootDir>/public/$1',
};
export const collectCoverage = true;
export const collectCoverageFrom = [
  './routes/**/*.{js,ts}',
  './plugins/**/*.{js,ts}',
  './app.{js,ts}',
  '!**/*.d.ts',
  '!**/node_modules/**',
];