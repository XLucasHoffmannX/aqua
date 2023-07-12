import { IUser } from "../data/api/user/User.types";

export interface IDataProvider {
    token: string | null,
    onChangeToken: (value: string | null) => void;
    userApi: IUser;
}