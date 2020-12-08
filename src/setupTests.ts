/* eslint-disable no-console */
import '@testing-library/jest-dom/extend-expect';

// Mock global.scrollTo, since Next.js Link component trigger it
global.scrollTo = jest.fn();

// Suppress validateDOMNesting error logs
const consoleError = console.error;
console.error = jest.fn((error) => {
  if (!error.includes('validateDOMNesting')) {
    consoleError(error);
  }
});
