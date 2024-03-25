import { IGenericService } from '@/domain/utility/generic-interface/IGenericService'
import { AuthenticationDto } from './AuthenticationDto'

export interface IAuthenticationService /* extends IGenericService<AuthenticationDto> */ {
  findOne(keys: string[]): Promise<AuthenticationDto>
  create(authenticationDto: AuthenticationDto): Promise<AuthenticationDto>
  update(authenticationDto: AuthenticationDto): Promise<AuthenticationDto>
}
