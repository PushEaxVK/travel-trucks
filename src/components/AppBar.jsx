import React from 'react';
import Container from './Container';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

function AppBar() {
  const linkStyle =
    'font-medium text-[16px] leading-[1.5] text-center text-dark';
  const activeLinkStyle = 'text-red';
  const setActiveClass = ({ isActive }) => {
    return clsx(linkStyle, isActive && activeLinkStyle);
  };

  return (
    <header className="bg-grayExtraLight border-b border-grayLighter">
      <Container>
        <div className="h-[72px] flex items-center justify-start flex-row gap-[450px]">
          <a href="/">
            <svg className="w-[136px] h-[16px]">
              <use href="/icons.svg#logo"></use>
            </svg>
          </a>
          <nav>
            <ul className="flex gap-8">
              <li>
                <NavLink className={setActiveClass} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={setActiveClass} to="/catalog">
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default AppBar;
