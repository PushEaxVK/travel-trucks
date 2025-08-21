import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({
  children,
  as = 'button', // "button" | "link"
  to, // шлях для NavLink
  variant = 'red', // "red" | "white"
  width = 173, // 173 | 166 | 145
  onClick,
  type = 'button', // для button
}) {
  const classes = clsx(
    'cursor-pointer flex items-center justify-center rounded-[200px] h-[56px]',
    'text-[16px] font-medium leading-[1.5] tracking-[-0.01em]',
    width === 145 && 'w-[145px]',
    width === 166 && 'w-[166px]',
    width === 173 && 'w-[173px]',
    variant === 'red' && ['bg-redLight text-white', 'hover:bg-red'],
    variant === 'white' && [
      'bg-white text-dark border border-grayLight',
      'hover:border-red',
    ]
  );
  return as === 'button' ? (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  ) : (
    <NavLink to={to} className={classes}>
      {children}
    </NavLink>
  );
}

export default Button;
