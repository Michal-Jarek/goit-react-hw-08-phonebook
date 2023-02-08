import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

import { useAuth } from 'utils/hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import { Loader } from 'components/Loader/Loader';
import { logOut } from 'redux/auth/authOperations';
import scss from './SharedLoyout.module.scss';

export const SharedLayout = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
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
              {!isLoggedIn ? (
                <>
                  <li>
                    <NavLink
                      className={scss.header_navigation__item}
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={scss.header_navigation__item}
                      to="/login"
                    >
                      Log In
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className={scss.header_navigation__item}
                      to="/contacts"
                    >
                      Contacts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={scss.header_navigation__item}
                      onClick={() => dispatch(logOut())}
                      to="/login"
                    >
                      Log out
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className={scss.container}>
          <Suspense fallback={<Loader />}>
            {isRefreshing ? <b>Refreshing user...</b> : <Outlet />}
          </Suspense>
        </div>
      </main>
    </>
  );
};
