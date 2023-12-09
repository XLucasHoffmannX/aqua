import { Tag } from 'antd';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Display = styled.div`
  background: var(--white);
  padding: 1rem;
  width: min(100%, 750px);
  border-radius: 4px;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    color: var(--font-2);
  }

  @media screen and (max-width: 650px) {
    > h1 {
      font-size: 14px;
    }
  }
`;

export const StatusConnect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: up 1s;
`;

export const TagStatus = styled(Tag)`
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: center;
`;

export const ContentDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  background: var(--white-1);
  border-radius: 4px;
  overflow-y: scroll;
  padding: 1rem;
`;
