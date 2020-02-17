const {defaults} = require('jest-config')

const config = {
  verbose: true,
  setupFiles: ['<rootDir>/enzyme.config.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(ts|js|jsx|es6)?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^.+\\.(svg|(sa|sc|c)ss)$': 'identity-obj-proxy',
    '@(components|services)/(.*)$': '<rootDir>/src/$1/$2',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
}

module.exports = {...defaults, ...config}
