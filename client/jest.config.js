// eslint-disable-next-line no-undef
module.exports = {
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
}