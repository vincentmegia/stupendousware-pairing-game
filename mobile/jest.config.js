module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  cacheDirectory: 'jest/.jest/cache',
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
  },
  collectCoverage: true,
}
