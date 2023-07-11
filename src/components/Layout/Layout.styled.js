import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 0;
  gap: 40px;
  height: 60px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
