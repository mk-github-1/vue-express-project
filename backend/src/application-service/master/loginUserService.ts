import { loginUserRepository } from '@/infrastructure/master/loginUserRepository'
import { LoginUserModel } from '@/domain-model/model/auth/LoginUserModel'

// loginUserService
export const loginUserService = () => {
  const find = async (account: string): Promise<LoginUserModel[]> => {
    return await loginUserRepository().find(account)
  }

  const create = async (loginUserModel: LoginUserModel): Promise<LoginUserModel> => {
    return await loginUserRepository().create(loginUserModel)
  }

  const update = async (id: number, loginUserModel: LoginUserModel): Promise<LoginUserModel> => {
    return await loginUserRepository().update(id, loginUserModel)
  }

  // deleteは予約語
  const del = async (account: string): Promise<string> => {
    return await loginUserRepository().del(account)
  }

  const sort = async (key: string): Promise<number> => {
    return await loginUserRepository().sort(key)
  }

  return {
    find,
    create,
    update,
    del,
    sort
  }
}
