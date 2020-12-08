import { getPage } from 'next-page-tester';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('/about', () => {
  it('Should work', async () => {
    const { page } = await getPage({ route: '/about' });
    render(page);

    expect(screen.getByText('We are a cool company.')).toBeInTheDocument();
    expect(
      screen.getByText(
        '{"userId":1,"id":1,"title":"delectus aut autem","completed":false}'
      )
    ).toBeInTheDocument();

    userEvent.click(screen.getByText('Home'));

    await screen.findByText('This is our homepage.');
  });
});
