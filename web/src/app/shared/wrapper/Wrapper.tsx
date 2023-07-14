import { ReactNode } from "react";
import {
  Container,
  WrapperContainer,
  WrapperContent,
  WrapperFooter,
  WrapperMain,
} from "./Wrapper.styles";
import { Sidebar, Topbar } from "./components";
import { useWrapper } from "./useWrapper";


function Wrapper({ children }: { children: ReactNode }) {
  const {openSidebar, handleOpenSidbar} = useWrapper();

  return (
    <Container>
      <WrapperContainer>
        <Sidebar openSidebar={openSidebar} onChangeOpenSidebar={handleOpenSidbar} />
        <WrapperContent>
          <Topbar onChangeOpenSidebar={handleOpenSidbar} />
          <WrapperMain>{children}</WrapperMain>
          <WrapperFooter>Hoffmann | ©2023</WrapperFooter>
        </WrapperContent>
      </WrapperContainer>
    </Container>
  );
}

export default Wrapper;
