export interface IUserProps {
  token: string | null;
}

export interface IUser {
  userInfo: never[];
  onChangeUserInfo: (value: never[]) => void;
  isLogged: boolean;
  onChangeIsLogged: (value: boolean) => void;
}
