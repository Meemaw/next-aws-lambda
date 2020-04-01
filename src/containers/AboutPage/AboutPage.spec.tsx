import React from 'react';
import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('Should render some text', () => {
    const { queryByText } = render(<AboutPage todos={{}} />);
    expect(queryByText('We are a cool company.')).toBeInTheDocument();
  });
});
