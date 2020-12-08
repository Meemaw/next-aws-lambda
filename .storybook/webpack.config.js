const path = require('path');

module.exports = ({ config }) => {
  // Required for absolute imports in Storybook
  config.resolve.modules.push(path.resolve(process.cwd(), 'src'));

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
