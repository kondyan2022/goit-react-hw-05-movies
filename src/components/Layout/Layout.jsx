import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavList, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">movies</StyledLink>
            </li>
          </NavList>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
