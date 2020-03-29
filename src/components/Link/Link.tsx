/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import NextLink from 'next/link';

type Props = Omit<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'href'
> & {
  to: string;
};

const Link = React.forwardRef<HTMLAnchorElement, Props>(({ to, ...rest }, ref) => {
  return (
    <NextLink href={to}>
      <a {...rest} ref={ref} />
    </NextLink>
  );
});

export default Link;
