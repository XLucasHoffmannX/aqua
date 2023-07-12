import { Container, Logout, Title } from "./Topbar.styles";

export function Topbar(): JSX.Element {
  return (
    <Container>
      <Title>Gerenciar mapa</Title>
      <Logout>Sair</Logout>
    </Container>
  );
}
