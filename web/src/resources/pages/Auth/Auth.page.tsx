import {
  AuthContainer,
  AuthFooter,
  AuthForm,
  AuthInputEmail,
  AuthInputPassword,
  AuthSubmit,
  ButtonSubmit,
  Container,
  LogoArea,
  RegisterNow,
} from "./Auth.styles";
import {
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import Logo from "../../assets/images/AquaTrack.svg";
import { Tooltip } from "antd";
import { useAuth } from "./useAuth";
import { Link, Redirect } from "react-router-dom";

export function Auth(): JSX.Element {
  const { authForm, changeInput, handleSubmit, status, success, onChangeStatus } = useAuth();

  return (
    <>
      <Container>
        <AuthContainer>
          <LogoArea>
            <img src={Logo} alt="AquaTrack" />
            <span>Monitoramento de águas: precisão e sustentabilidade</span>
          </LogoArea>
          <AuthForm onSubmit={(e)=> handleSubmit(e)} id="form_auth">
            <AuthInputEmail
              placeholder="Email"
              prefix={<AiOutlineMail />}
              suffix={
                <Tooltip
                  title="Exemplo: email@dominio.com"
                  arrow
                  autoAdjustOverflow
                >
                  <AiOutlineInfoCircle style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
              name="email"
              value={authForm.email}
              status={status ? "error" : ""}
              onChange={changeInput}
              onFocus={()=> onChangeStatus(false)}
            />
            <AuthInputPassword
              placeholder="Senha de usuário"
              prefix={<AiOutlineLock className="input_user_ico" />}
              name="password"
              value={authForm.password}
              status={status ? "error" : ""}
              onChange={changeInput}
              onFocus={()=> onChangeStatus(false)}
            />
            <AuthSubmit>
              <ButtonSubmit htmlType="submit"  type="primary" form="form_auth" onClick={(e) => handleSubmit(e)}>Acessar</ButtonSubmit>
            </AuthSubmit>
            <RegisterNow>
              <Link to="/register">Não possui um conta? Registre-se aqui</Link>
            </RegisterNow>
          </AuthForm>
        </AuthContainer>
        <AuthFooter>Hoffmann | ©2023</AuthFooter>
      </Container>
      {success && <Redirect to="/home" />}
    </>
  );
}
