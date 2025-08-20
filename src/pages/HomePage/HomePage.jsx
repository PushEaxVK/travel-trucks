import React from 'react';
import Container from '../../components/Container';
import css from './HomePage.module.css';
import clsx from 'clsx';

function HomePage() {
  return (
    <main className={clsx(css.background, 'h-screen bg-no-repeat bg-cover')}>
      <Container>
        <h1>HomePage</h1>
      </Container>
    </main>
  );
}

export default HomePage;
