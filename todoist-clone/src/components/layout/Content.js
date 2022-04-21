import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export function Content() {
  return (
    <section className="content">
      <Sidebar />
      <Tasks />
    </section>
  );
}
