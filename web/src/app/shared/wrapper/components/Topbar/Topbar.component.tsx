import { Container, Logout, Title } from "./Topbar.styles";
import { HiMenu } from "react-icons/hi";
import { useTopbar } from "./useTopbar";
import { ITopbarProps } from "./Topabar.types";

export function Topbar({ onChangeOpenSidebar } : ITopbarProps): JSX.Element {
  const { handleLogout } = useTopbar();
  
  return (
    <Container>
      <Title>
        <HiMenu onClick={()=> onChangeOpenSidebar()} />
        Gerenciar mapa
      </Title>
      <Logout onClick={handleLogout}>Sair</Logout>
    </Container>
  );
}
