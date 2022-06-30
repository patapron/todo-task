module.exports = {
  verbose: true,
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,js,vue}'
  ],
  coveragePathIgnorePatterns: [
    '!src/main.ts',
    '!src/router.ts',
    '!src/plugins/*',
    '!src/types/*',
    '!src/model/*',
    '!*.d.ts',
  ],
  coverageReporters: ['html', 'text', 'lcov'],
  rootDir: '../..',
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['./tests/unit/tools'],
}