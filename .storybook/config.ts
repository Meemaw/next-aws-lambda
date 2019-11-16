import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src', true, /\.stories\.tsx$/);
  return req.keys().map(req);
}

configure(loadStories, module);
