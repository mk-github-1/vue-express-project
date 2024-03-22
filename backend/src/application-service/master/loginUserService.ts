// import userRepository from './infrastructure/auth/userRepository';
// import { LoginUserModel } from './domain-model/model/auth/LoginUserModel';

// loginUserService
export default () => {
  const find = async (id: number) => {
    // return await userRepository.findAll();
  }

  const create = async (loginUser: any) => {
    // return await userRepository.create(loginUser);
  }

  const update = async (id: number, loginUser: any) => {
    // return await userRepository.update(id, loginUser);
  }

  // deleteは予約語
  const del = async (id: number) => {
    // return await userRepository.del(id);
  }

  const sort = async () => {
    // return await userRepository.sort();
  }

  return {
    find,
    create,
    update,
    del,
    sort
  }
}
