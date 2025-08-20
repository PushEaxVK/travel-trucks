import React from 'react';
import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <AppBar />
      <main className="min-h-screen bg-no-repeat bg-cover w-full">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
