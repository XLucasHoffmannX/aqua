import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  height: 100%;
  background-color: var(--blue-1);
  overflow-x: none;

  @media (max-width: 700px) {
    width: 0;
    opacity: 0;
    transition: all 1s;
  }
`;

export const SidebarTop = styled.div`
  padding: 0.7rem;
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  > img {
    width: 70%;
  }
`;

export const SidebarLink = styled(Link)`
  margin-top: 1rem;
  background-color: #1980dc;
  height: 55px;
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  align-items: center;
  color: var(--white);

  > svg {
    font-size: 28px;
  }

  &:hover {
    background-color: var(--white);
    color: #1980dc;
    border: 1px solid #1980dc;
  }
`;

export const SidebarTitle = styled.p`
  margin-left: 1rem;
  font-size: 18px;
  font-weight: 500;
`;

export const SidebarContent = styled.div`
  padding: 0.7rem;
`;

export const SidebarItem = styled(NavLink)`
  margin-top: 1rem;
  height: 55px;
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  align-items: center;
  color: var(--white);

  > svg {
    font-size: 28px;
  }

  &.active {
    background-color: var(--white);
    color: #1980dc;
  }
`;
