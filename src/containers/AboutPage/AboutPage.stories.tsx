import React from 'react';
import type { Meta } from '@storybook/react';

import { AboutPage } from './AboutPage';

export default {
  title: 'AboutPage',
  component: AboutPage,
} as Meta;

export const Default = () => <AboutPage todos={[]} />;
