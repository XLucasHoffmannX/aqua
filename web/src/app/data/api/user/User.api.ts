import { useState, useEffect } from 'react';
import { HttpAuth } from '../../../shared/Http';
import { User } from '../../../shared/types/user.types';
import { IUserApi, IUserProps } from './User.types';
import UserService from '../../services/User/User.service';
import { useQuery } from '@tanstack/react-query';

export function UserApi({ token }: IUserProps): IUserApi {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    if (token) {
      async function getUser(): Promise<void> {
        try {
          const { data } = await UserService.getUser();

          if (data) {
            setUserData(data);
            setIsLogged(true);
          }
        } catch (error) {
          alert(error);
        }
      }
      getUser();
    }
  }, [token]);

  return {
    userData,
    isLogged,
    onChangeUserData: setUserData,
    onChangeIsLogged: setIsLogged
  };
}
