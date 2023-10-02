/* eslint-disable import/no-extraneous-dependencies */
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/jest-globals';

import jestMockFetch from 'jest-fetch-mock';

// eslint-disable-next-line no-undef
// @ts-expect-error
global.setImmediate = jest.useRealTimers;
// @ts-expect-error
global.fetch = jestMockFetch;

// require('jest-fetch-mock').enableMocks();
// eslint-disable-next-line no-undef
