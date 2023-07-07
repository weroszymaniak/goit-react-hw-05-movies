import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header>
        <nav className={css.navi}>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <Link to="/movies" className={css.link}>
            Movies
          </Link>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
