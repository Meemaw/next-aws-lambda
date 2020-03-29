import React from 'react';
import AboutUs from 'components/AboutUs';
import Link from 'components/Link';

const About = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About Us</li>
      </ul>

      <AboutUs />
    </>
  );
};

export default About;
