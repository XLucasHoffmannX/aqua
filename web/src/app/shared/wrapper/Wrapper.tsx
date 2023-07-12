import { ReactNode } from "react";
import {
  Container,
  WrapperContainer,
  WrapperContent,
  WrapperFooter,
  WrapperMain,
} from "./Wrapper.styles";
import { Sidebar, Topbar } from "./components";


function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Container>
      <WrapperContainer>
        <Sidebar />
        <WrapperContent>
          <Topbar />
          <WrapperMain>{children}</WrapperMain>
          <WrapperFooter>Hoffmann | ©2023</WrapperFooter>
        </WrapperContent>
      </WrapperContainer>
    </Container>
  );
}

export default Wrapper;
