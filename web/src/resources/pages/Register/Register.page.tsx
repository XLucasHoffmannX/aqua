import {
  AuthrNow,
  ButtonSubmit,
  Container,
  LogoArea,
  RegisterContainer,
  RegisterFooter,
  RegisterForm,
  RegisterInput,
  RegisterInputPassword,
  RegisterSubmit,
} from "./Register.styles";
import Logo from "../../assets/images/AquaTrack.svg";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineLock,
} from "react-icons/ai";
import { Tooltip } from "antd";
import { useLang } from '../../../app/shared/hooks/useLang/useLang';

export function Register(): JSX.Element {
  const { lang, currentLang } = useLang();

  return (
    <Container>
      <RegisterContainer>
        <LogoArea>
          <img src={Logo} alt="AquaTrack" />
          <span>{lang.auth.sub_title[currentLang]}</span>
        </LogoArea>
        <RegisterForm id="form_register">
          <RegisterInput
            placeholder="Nome de usuário"
            prefix={<AiOutlineUser />}
            suffix={
              <Tooltip title="Deve ser seu nome comum" arrow autoAdjustOverflow>
                <AiOutlineInfoCircle style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            name="email"
          />
          <RegisterInput
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
          />
          <RegisterInputPassword
            placeholder="Senha de usuário"
            prefix={<AiOutlineLock className="input_user_ico" />}
            name="password"
          />
          <RegisterInputPassword
            placeholder="Confirme sua senha"
            prefix={<AiOutlineLock className="input_user_ico" />}
            name="password"
          />
          <RegisterSubmit>
            <ButtonSubmit htmlType="submit" type="primary" form="form_auth">
              Cadastrar
            </ButtonSubmit>
          </RegisterSubmit>
          <AuthrNow>
            <Link to="/">Já possui uma conta? Acessar aqui</Link>
          </AuthrNow>
        </RegisterForm>
      </RegisterContainer>
      <RegisterFooter>Hoffmann | ©2023</RegisterFooter>
    </Container>
  );
}
