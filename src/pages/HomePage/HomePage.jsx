import React from 'react';
import Container from '../../components/Container';
import css from './HomePage.module.css';
import clsx from 'clsx';

function HomePage() {
  return (
    <div
      className={clsx(
        css.background,
        'bg-no-repeat bg-cover pt-[260px] h-screen'
      )}
    >
      <Container>
        <div>
          <h1 className="text-grayExtraLight font-semibold text-[48px] leading-[0.66] mb-4">
            Campers of your dreams
          </h1>
          <h2 className="text-grayExtraLight font-semibold text-[24px] leading-[1.33] mb-10">
            You can find everything you want in our catalog
          </h2>
          <button
            className={clsx(
              'cursor-pointer flex items-center justify-center rounded-[200px] bg-redLight text-white w-[173px] h-[56px]',
              'hover:bg-red'
            )}
            type="button"
          >
            View Now
          </button>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
