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
} from "./Auth.styles";
import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import Logo from "../../assets/images/AquaTrack.svg";
import { Tooltip } from "antd";
import { useAuth } from "./useAuth";
import { Redirect } from "react-router-dom";

export function Auth(): JSX.Element {
  const { authForm, changeInput, handleSubmit, status, success, onChangeStatus } = useAuth();

  return (
    <>
      <Container>
        <AuthContainer>
          <LogoArea>
            <img src={Logo} alt="AquaTrack" />
            <span>Monitoramento de águas: precisão e sustentabilidade </span>
          </LogoArea>
          <AuthForm onSubmit={(e)=> handleSubmit(e)} id="form_auth">
            <AuthInputEmail
              placeholder="Email"
              prefix={<AiOutlineUser className="input_user_ico" />}
              suffix={
                <Tooltip
                  title="Exemplo: email@dominio.com"
                  arrow
                  autoAdjustOverflow
                >
                  <AiOutlineInfoCircle style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
              className="input_user"
              name="email"
              value={authForm.email}
              status={status ? "error" : ""}
              onChange={changeInput}
              onFocus={()=> onChangeStatus(false)}
            />
            <AuthInputPassword
              placeholder="Senha de usuário"
              prefix={<AiOutlineLock className="input_user_ico" />}
              className="input_user"
              name="password"
              value={authForm.password}
              status={status ? "error" : ""}
              onChange={changeInput}
              onFocus={()=> onChangeStatus(false)}
            />
            <AuthSubmit>
              <ButtonSubmit type="primary" form="form_auth" onClick={(e) => handleSubmit(e)}>Acessar</ButtonSubmit>
            </AuthSubmit>
          </AuthForm>
        </AuthContainer>
        <AuthFooter>Hoffmann | ©2023</AuthFooter>
      </Container>
      {success && <Redirect to="/home" />}
    </>
  );
}
