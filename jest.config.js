module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.ts$':'ts-jest',
    '^.+\\.vue$':'@vue/vue2-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleFileExtensions: ['js', 'ts', 'json', 'node', 'html'],
  testPathIgnorePatterns: [
    '/build/',
    '/config/',
    '/data/',
    '/dist/',
    '/node_modules/',
    '/test/',
    '/vendor/'
  ],
  testEnvironment: "jsdom"
}