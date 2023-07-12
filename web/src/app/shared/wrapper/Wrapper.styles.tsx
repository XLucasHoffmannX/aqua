import styled from "styled-components";
import { Layout } from "antd";

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

export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperMain = styled.div`
  height: 100%;
`;

export const WrapperFooter = styled(Footer)`
  text-align: center;
  font-weight: 600;
  color: var(--font-2);
  background: var(--white-1);
`;
