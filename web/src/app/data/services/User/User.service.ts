import { HttpAuth } from '../../../shared/Http';
import { User } from '../../../shared/types/user.types';
import { IGetUser } from './User.types';

class UserService {
  async getUser(): Promise<IGetUser> {
    const { data } = await HttpAuth.get<User>('/user/auth');

    return { data };
  }
}

export default new UserService();
