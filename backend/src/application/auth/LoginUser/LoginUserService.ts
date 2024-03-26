import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { TYPES } from '@/config/inversify/types'
import { CustomException } from '@/domain/utility/error/CustomException'
import { ILoginUserRepository } from '@/domain/auth/LoginUser/ILoginUserRepository'
import { ILoginUserService } from '@/application/auth/LoginUser/ILoginUserService'
import { LoginUserDto } from '@/domain/auth/LoginUser/LoginUserDto'

@injectable()
export class LoginUserService implements ILoginUserService {
  private loginUserRepository: ILoginUserRepository

  constructor(@inject(TYPES.LoginUserRepository) loginUserRepository: ILoginUserRepository) {
    this.loginUserRepository = loginUserRepository

    this.find = this.find.bind(this)
    this.findOne = this.findOne.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.sort = this.sort.bind(this)
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

  async delete(keys: string[]): Promise<string[]> {
    return await this.loginUserRepository.delete(keys)
  }

  async sort(loginUserDtos: LoginUserDto[]): Promise<number> {
    // sortListsを作成
    const lists: { keys: string[]; value: number }[] = loginUserDtos.map((currentValue) => ({
      keys: [currentValue['account'], 'test'],
      value: currentValue['sortOrder']
    }))

    return await this.loginUserRepository.sort(lists)
  }
}
