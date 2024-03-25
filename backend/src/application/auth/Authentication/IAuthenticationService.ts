import { AuthenticationDto } from './AuthenticationDto'

export interface IAuthenticationService {
  findOne(keys: string[]): Promise<AuthenticationDto>
  create(authenticationDto: AuthenticationDto): Promise<AuthenticationDto>
  update(authenticationDto: AuthenticationDto): Promise<AuthenticationDto>
}
