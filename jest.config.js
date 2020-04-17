module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{vue,ts}',
    '!src/**/*.d.ts',
    '!src/App.vue',
    '!src/demo.ts',
    '!src/config/**',
    '!**/node_modules/**',
    '!dist/**',
    '!src/plugins/**',
    '!src/config/**',
    '!tests/unit/**'
  ],
  coverageReporters: ['lcov', 'text-summary']
};
