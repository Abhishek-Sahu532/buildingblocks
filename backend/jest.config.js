export default {
  testEnvironment: 'node',
  // setupFilesAfterEnv: ['<rootDir>/src/__tests__'],
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};
