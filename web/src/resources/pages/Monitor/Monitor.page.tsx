import { Wrapper } from 'resources/components';
import { Container, Content, Display } from './Monitor.styles';
import { useEffect, useState } from 'react';

export function Monitor(): JSX.Element {
  return (
    <Wrapper title='Monitor de recursos'>
      <Container>
        <Content>
          <Display>
          </Display>
        </Content>
      </Container>
    </Wrapper>
  );
}
