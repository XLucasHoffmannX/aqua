import { ReactNode, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { UserApi } from '../data/api/user/User.api';
import { IDataProviderProps, IStateDataProvider } from './Data.provider.types';

export const ContextState = createContext<IStateDataProvider | {}>({});

export default function DataProvider({
  children
}: IDataProviderProps): ReactNode {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    setToken(Cookies.get('access-token') ?? '');
  }, [token, setToken]);

  const state: IStateDataProvider = {
    token: token,
    onChangeToken: setToken,
    userApi: UserApi({ token })
  };

  return (
    <ContextState.Provider value={state}>{children}</ContextState.Provider>
  );
}
