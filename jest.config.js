module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{vue, ts}',
    '!**/node_modules/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/src/plugins/**',
    '!<rootDir>/src/config/**',
    '!<rootDir>/tests/unit/**'
  ],
  coverageReporters: ['lcov', 'text-summary']
};
