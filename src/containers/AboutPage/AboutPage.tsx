import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
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

      <h1>About</h1>
      <p>We are a cool company.</p>
    </>
  );
};

export default About;
