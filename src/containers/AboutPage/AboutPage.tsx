import React from 'react';
import Link from 'next/link';

import AboutUs from 'components/AboutUs';

type Props = {
  todos: object;
};

const About = ({ todos }: Props) => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>About Us</li>
      </ul>

      <AboutUs />

      <div>TODOS:</div>
      <div>{JSON.stringify(todos)}</div>
    </>
  );
};

export default About;
