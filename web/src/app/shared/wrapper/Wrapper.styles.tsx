import { Layout } from "antd";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const { Content, Footer } = Layout;

export const Container = styled(Layout)`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
`;

export const WrapperContainer = styled(Content)`
  width: 100%;
  overflow-y: auto;
  animation: animate-div 0.5s;
  display: flex;
`;

/* Sidebar */
export const WrapperSidebar = styled.div`
  width: 320px;
  height: 100%;
  background-color: var(--blue-1);
  overflow-x: none;
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
/*  */

export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/* Topbar */

export const WrapperTopbar = styled.div`
  height: 65px;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.25);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logout = styled.div`
  width: 100px;
  font-size: 18px;
  color: var(--red-1);
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding: 0.3rem;
  border-radius: 4px;

  &:hover {
    border: 1px solid var(--red-1);
    background-color: var(--white);
    color: var(--red-1);
  }
`;

export const TitleTopbar = styled.div`
  color: var(--font-1);
  font-size: 18px;
`;

/*  */

export const WrapperMain = styled.div`
  height: 100%;
`;

export const WrapperFooter = styled(Footer)`
  text-align: center;
  font-weight: 600;
  color: var(--font-2);
  background: var(--white-1);
`;
