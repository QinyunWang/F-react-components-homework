module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  setupFilesAfterEnv: ['./rtl.setup.js'],
  collectCoverageFrom: ['src/**/*.js', '!src/index.js', '!src/App/App.js'],
};
