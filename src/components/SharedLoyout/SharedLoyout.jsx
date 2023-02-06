import { Loader } from 'components/Loader/Loader';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import scss from './SharedLoyout.module.scss';

export const SharedLayout = () => (
  <>
    <header className={scss.page_header}>
      <div className={scss.container}>
        <nav className={scss.header_navigation}>
          <ul className={scss.header_navigation__list}>
            <li>
              <NavLink className={scss.header_navigation__item} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={scss.header_navigation__item} to="/register">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className={scss.header_navigation__item} to="/login">
                Log In
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div className={scss.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  </>
);
