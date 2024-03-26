import { IGenericRepository } from '@/domain/utility/generic-interface/IGenericRepository'
import { LoginUserDto } from '@/domain/auth/LoginUser/LoginUserDto'

export interface ILoginUserRepository extends IGenericRepository<LoginUserDto> {
  find(): Promise<LoginUserDto[]>
  findOne(keys: string[]): Promise<LoginUserDto>
  create(loginUserDto: LoginUserDto): Promise<LoginUserDto>
  update(keys: string[], loginUserDto: LoginUserDto): Promise<LoginUserDto>
  delete(keys: string[]): Promise<string[]>
  sort<T extends { keys: string[]; value: number }>(lists: T[]): Promise<number>
}
