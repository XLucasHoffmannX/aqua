import { ReactNode, createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserApi } from "../data/api/user/User.api";

export const ContextState = createContext({});

export default function DataProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(Cookies.get("access-token") ?? null);
  }, [token, setToken]);

  const state = {
    token: token, 
    onChangeToken: setToken,
    userApi: UserApi(token),
  };

  return (
    <ContextState.Provider value={state}>{children}</ContextState.Provider>
  );
}
