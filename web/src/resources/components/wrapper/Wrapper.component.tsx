import { ReactNode } from 'react';

import { Sidebar, Topbar } from './components';
import { useWrapper } from './useWrapper';

import {
  Container,
  WrapperContainer,
  WrapperContent,
  WrapperFooter,
  WrapperMain
} from './Wrapper.styles';

export function Wrapper({ children }: { children: ReactNode }): JSX.Element {
  const { openSidebar, handleOpenSidbar } = useWrapper();

  return (
    <Container>
      <WrapperContainer>
        <Sidebar
          openSidebar={openSidebar}
          onChangeOpenSidebar={handleOpenSidbar}
        />
        <WrapperContent>
          <Topbar onChangeOpenSidebar={handleOpenSidbar} />
          <WrapperMain>{children}</WrapperMain>
          <WrapperFooter>Hoffmann | ©2023</WrapperFooter>
        </WrapperContent>
      </WrapperContainer>
    </Container>
  );
}
