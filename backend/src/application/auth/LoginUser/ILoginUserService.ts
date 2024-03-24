import { IGenericService } from '@/domain/utility/generic-interface/IGenericService'
import { LoginUserDto } from '@/application/auth/LoginUser/LoginUserDto'

export interface ILoginUserService extends IGenericService<LoginUserDto> {
  find(): Promise<LoginUserDto[]>
  findOne(keys: string[]): Promise<LoginUserDto>
  create(loginUserDto: LoginUserDto): Promise<LoginUserDto>
  update(loginUserDto: LoginUserDto): Promise<LoginUserDto>
  delete(loginUserDto: LoginUserDto): Promise<string>
  sort(loginUserDtos: LoginUserDto[]): Promise<number>
}