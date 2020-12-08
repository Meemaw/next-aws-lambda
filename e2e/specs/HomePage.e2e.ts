import 'testcafe';
import { getByText } from '@testing-library/testcafe';

import config from '../config';

fixture('<HomePage />').page(config.baseURL);

test('Can navigate to about page', async (t) => {
  await t
    .expect(getByText('This is our homepage.').exists)
    .ok('Renders HomePage text');

  await t
    .click(getByText('About Us'))
    .expect(getByText('We are a cool company.').exists)
    .ok('Render AboutPage text');
});
