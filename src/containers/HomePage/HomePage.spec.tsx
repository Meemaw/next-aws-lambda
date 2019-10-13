import React from 'react';
import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('Should render some text', () => {
    const { queryByText } = render(<HomePage />);
    expect(queryByText('This is our homepage.')).toBeInTheDocument();
  });
});
