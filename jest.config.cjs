module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    globals: {
      'react': require('react'),
    },
    testEnvironment: 'jsdom',
  };
  