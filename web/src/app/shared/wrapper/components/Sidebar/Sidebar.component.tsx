import {
  CloseMobile,
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
import { IoIosNotificationsOutline, IoMdClose } from "react-icons/io";
import LogoWhite from "../../../../../resources/assets/images/AquaTrackWhite.svg";
import { ISidebarProps } from "./Sidebar.types";

export function Sidebar({ openSidebar, onChangeOpenSidebar }: ISidebarProps): JSX.Element {
  return (
    <Container openSidebar={openSidebar}>
      <SidebarTop>
        <CloseMobile>
          <IoMdClose  onClick={()=> onChangeOpenSidebar(false)}/>
        </CloseMobile>
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
