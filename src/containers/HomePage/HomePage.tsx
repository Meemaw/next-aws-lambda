import React from 'react';
import Link from 'components/Link';

const HomePage = () => {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <h1>This is our homepage.</h1>
    </>
  );
};

export default HomePage;
