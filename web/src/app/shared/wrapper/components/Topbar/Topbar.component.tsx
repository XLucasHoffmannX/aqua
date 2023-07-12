import { Container, Logout, Title } from "./Topbar.styles";
import {HiMenu} from 'react-icons/hi';

export function Topbar(): JSX.Element {
  return (
    <Container>
      <Title>
        <HiMenu />
        Gerenciar mapa
      </Title>
      <Logout>Sair</Logout>
    </Container>
  );
}
