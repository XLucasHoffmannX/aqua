import {
  Container,
  SidebarContent,
  SidebarItem,
  SidebarLink,
  SidebarLogo,
  SidebarTitle,
  SidebarTop,
} from "./Sidebar.styles";
import { CgUserlane } from "react-icons/cg";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";
import LogoWhite from "../../../../../resources/assets/images/AquaTrackWhite.svg";

export function Sidebar(): JSX.Element {
  return (
    <Container>
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
    </Container>
  );
}
