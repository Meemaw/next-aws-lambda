import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>

      <h1>This is our homepage.</h1>
    </>
  );
};

export default HomePage;
