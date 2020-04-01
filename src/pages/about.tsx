import React from 'react';
import ky from 'ky-universal';
import { GetServerSideProps } from 'next';

import AboutPage from '../containers/AboutPage';

type Props = {
  todos: object;
};

const About = ({ todos }: Props) => {
  return <AboutPage todos={todos} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (_ctx) => {
  const todos = await ky('https://jsonplaceholder.typicode.com/todos/1').json<object>();
  return { props: { todos } };
};

export default About;
