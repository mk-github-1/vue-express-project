import { IGenericService } from '@/domain/utility/generic-interface/IGenericService'
import { LoginUserDto } from '@/domain/auth/LoginUser/LoginUserDto'

export interface ILoginUserService extends IGenericService<LoginUserDto> {
  find(): Promise<LoginUserDto[]>
  findOne(keys: string[]): Promise<LoginUserDto>
  create(loginUserDto: LoginUserDto): Promise<LoginUserDto>
  update(loginUserDto: LoginUserDto): Promise<LoginUserDto>
  delete(keys: string[]): Promise<string[]>
  sort(loginUserDtos: LoginUserDto[]): Promise<number>
}
