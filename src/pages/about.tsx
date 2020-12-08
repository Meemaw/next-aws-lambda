import React from 'react';
import ky from 'ky-universal';
import { GetServerSideProps } from 'next';
import { AboutPage } from 'containers/AboutPage';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
};

const About = ({ todos }: Props) => {
  return <AboutPage todos={todos} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (_ctx) => {
  const todos = await ky('https://jsonplaceholder.typicode.com/todos/1').json<
    Todo[]
  >();
  return { props: { todos } };
};

export default About;
