import { ReactNode } from "react";
import {
  Container,
  Logout,
  SidebarContent,
  SidebarItem,
  SidebarLink,
  SidebarLogo,
  SidebarTitle,
  SidebarTop,
  TitleTopbar,
  WrapperContainer,
  WrapperContent,
  WrapperFooter,
  WrapperMain,
  WrapperSidebar,
  WrapperTopbar,
} from "./Wrapper.styles";
import LogoWhite from "../../../resources/assets/images/AquaTrackWhite.svg";
import { CgUserlane } from "react-icons/cg";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Container>
      <WrapperContainer>
        <WrapperSidebar>
          <SidebarTop>
            <SidebarLogo href="/home">
              <img src={LogoWhite} alt="" />
            </SidebarLogo>
            <SidebarLink to="/user">
              <CgUserlane />
              <SidebarTitle>Lucas Hoffmann</SidebarTitle>
            </SidebarLink>
          </SidebarTop>
          <SidebarContent>
            <SidebarItem to="/home">
              <LiaMapMarkedAltSolid />
              <SidebarTitle>Inicio</SidebarTitle>
            </SidebarItem>
            <SidebarItem to="/alerts">
              <IoIosNotificationsOutline />
              <SidebarTitle>Alertas</SidebarTitle>
            </SidebarItem>
          </SidebarContent>
        </WrapperSidebar>
        <WrapperContent>
          <WrapperTopbar>
						<TitleTopbar>Gerenciar mapa</TitleTopbar>
            <Logout>Sair</Logout>
          </WrapperTopbar>
          <WrapperMain>{children}</WrapperMain>
          <WrapperFooter>Hoffmann | ©2023</WrapperFooter>
        </WrapperContent>
      </WrapperContainer>
    </Container>
  );
}

export default Wrapper;
