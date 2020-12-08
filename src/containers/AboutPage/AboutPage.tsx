import React from 'react';
import Link from 'next/link';
import { AboutUs } from 'components/AboutUs';
import { Todo } from 'pages/about';

type Props = {
  todos: Todo[];
};

export const AboutPage = ({ todos }: Props) => {
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
