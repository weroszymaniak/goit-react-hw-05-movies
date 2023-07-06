import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
