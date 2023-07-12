import { Button, Input, Layout } from "antd";
import styled from "styled-components";

const { Content, Footer } = Layout;

export const Container = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  height: 100%;
  width: 100%;
`;

export const AuthContainer = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const AuthFooter = styled(Footer)`
  text-align: center;
  font-weight: 600;
  color: var(--font-2);
  background: var(--white-1);
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 18px;
    color: var(--font-2);
    margin: 1rem 2rem;
    text-align: center;
  }
`;

export const AuthForm = styled.form`
  width: min(100%, 450px);
  background: var(--white);
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1rem;

  animation: left 0.5s;

  box-shadow: 8px 10px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const AuthInputEmail = styled(Input)`
  height: 55px;
  color: var(--font-2);
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const AuthInputPassword = styled(Input.Password)`
  height: 55px;
  color: var(--font-2);
  font-size: 18px;
`;

export const AuthSubmit = styled.div`
  margin-top: 1rem;
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
	height: 50px;
	font-size: 18px;
`;
