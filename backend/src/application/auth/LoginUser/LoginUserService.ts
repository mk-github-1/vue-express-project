import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { CustomException } from '@/domain/utility/error/CustomException'
import { ILoginUserRepository } from '@/domain/auth/LoginUser/ILoginUserRepository'
import { ILoginUserService } from '@/application/auth/LoginUser/ILoginUserService'
import { LoginUserDto } from '@/application/auth/LoginUser/LoginUserDto'

// @injectable()
export class LoginUserService implements ILoginUserService {
  private loginUserRepository: ILoginUserRepository

  constructor(/* @inject('LoginUserRepository')*/ loginUserRepository: ILoginUserRepository) {
    this.loginUserRepository = loginUserRepository
  }

  async find(): Promise<LoginUserDto[]> {
    let loginUserDtos: LoginUserDto[] = []

    loginUserDtos = await this.loginUserRepository.find()

    if (!loginUserDtos.length) {
      throw new CustomException(404, '', 'error')
    }

    return loginUserDtos
  }

  async findOne(keys: string[]): Promise<LoginUserDto> {
    let loginUserDtos: LoginUserDto[] = []

    const account = keys[0]
    const loginUserDto = await this.loginUserRepository.findOne(keys)

    if (!loginUserDtos.length) {
      throw new CustomException(404, '', 'error')
    }

    return loginUserDto
  }

  async create(loginUserDto: LoginUserDto): Promise<LoginUserDto> {
    return await this.loginUserRepository.create(loginUserDto)
  }

  async update(loginUserDto: LoginUserDto): Promise<LoginUserDto> {
    let keys = []
    keys.push(loginUserDto['account'])
    return await this.loginUserRepository.update(keys, loginUserDto)
  }

  async delete(loginUserDto: LoginUserDto): Promise<string> {
    let keys = []
    keys.push(loginUserDto['account'])
    return await this.loginUserRepository.delete(keys)
  }

  async sort(loginUserDtos: LoginUserDto[]): Promise<number> {
    // sortListsを作成
    const lists = loginUserDtos.map((currentValue) => ({
      key: currentValue.account,
      value: currentValue.sortOrder
    }))

    return await this.loginUserRepository.sort(lists)
  }
}
