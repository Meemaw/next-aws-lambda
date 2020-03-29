const path = require('path');

module.exports = ({ config }) => {
  // Required for absolute imports in Storybook
  const resolvedModules = config.resolve.modules || [];
  config.resolve.modules = [...resolvedModules, path.resolve(process.cwd(), 'src')];

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
