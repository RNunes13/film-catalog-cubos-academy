const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const ignorePatterns = [
  'p-throttle'
].join('|')

const customJestConfig = {
  coverageDirectory: 'coverage',
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  setupFiles: [
    '<rootDir>/__mocks__/common.js'
  ],
  moduleNameMapper: {
    "util/(.*)$": "<rootDir>/src/util/$1",
    "theme(.*)$": "<rootDir>/src/theme/$1",
    "components/(.*)$": "<rootDir>/src/components/$1",
  },
  transformIgnorePatterns: [
    `node_modules/(?!${ignorePatterns})`
  ]
};

// module.exports = createJestConfig(customJestConfig);

const asyncConfig = createJestConfig(customJestConfig)

module.exports = async () => {
  const config = await asyncConfig()

  // next/jest ignores node_modules and allows to add more ignore patterns, but we need to override them fully to whitelist some node_modules
  // https://github.com/vercel/next.js/blob/canary/packages/next/build/jest/jest.ts
  config.transformIgnorePatterns = customJestConfig.transformIgnorePatterns

  return config
}
