import { Tooltip } from 'antd';
import {
  AiOutlineInfoCircle,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser
} from 'react-icons/ai';
import { Link, Redirect } from 'react-router-dom';

import Logo from '../../assets/images/AquaTrack.svg';

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
  RegisterSubmit
} from './Register.styles';
import { useLang } from 'shared/hooks/useLang/useLang';
import { useRegister } from './useRegister';

export function Register(): JSX.Element {
  const { lang, currentLang } = useLang();
  const { registerForm, success, useChangeInput, handleRegister } =
    useRegister();

  return (
    <>
      <Container>
        <RegisterContainer>
          <LogoArea>
            <img
              src={Logo}
              alt='AquaTrack'
            />
            <span>{lang.auth.sub_title[currentLang]}</span>
          </LogoArea>
          <RegisterForm>
            <RegisterInput
              placeholder='Nome de usuário'
              name='name'
              value={registerForm.name}
              onChange={useChangeInput}
              prefix={<AiOutlineUser />}
              suffix={
                <Tooltip
                  title='Deve ser seu nome comum (máx: 15 caracteres)'
                  arrow
                  autoAdjustOverflow
                >
                  <AiOutlineInfoCircle style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
              maxLength={15}
              required
            />
            <RegisterInput
              placeholder='Email'
              name='email'
              type='email'
              value={registerForm.email}
              onChange={useChangeInput}
              prefix={<AiOutlineMail />}
              suffix={
                <Tooltip
                  title='Exemplo: email@dominio.com'
                  arrow
                  autoAdjustOverflow
                >
                  <AiOutlineInfoCircle style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
              required
            />
            <RegisterInputPassword
              placeholder='Senha de usuário'
              name='password'
              value={registerForm.password}
              onChange={useChangeInput}
              prefix={<AiOutlineLock className='input_user_ico' />}
              required
            />
            <RegisterInputPassword
              placeholder='Confirme sua senha'
              name='passwordConfirm'
              value={registerForm.passwordConfirm}
              onChange={useChangeInput}
              prefix={<AiOutlineLock className='input_user_ico' />}
              required
            />
            <RegisterSubmit>
              <ButtonSubmit
                htmlType='submit'
                type='primary'
                onClick={e => handleRegister(e)}
              >
                Cadastrar
              </ButtonSubmit>
            </RegisterSubmit>
            <AuthrNow>
              <Link to='/'>Já possui uma conta? Acessar aqui</Link>
            </AuthrNow>
          </RegisterForm>
        </RegisterContainer>
        <RegisterFooter>Hoffmann | ©2023</RegisterFooter>
      </Container>
      {success && <Redirect to='/' />}
    </>
  );
}
