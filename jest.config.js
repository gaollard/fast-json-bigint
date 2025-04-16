module.exports = {
  verbose: true,
  testRegex: '.*\\.test\\.ts?$',
  transform: {
    '\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
}
