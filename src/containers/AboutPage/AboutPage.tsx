import React from 'react';
import Link from 'next/link';

import AboutUs from 'components/AboutUs';

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

      <AboutUs />
    </>
  );
};

export default About;
