import { injectable, inject } from 'inversify'
import { CustomException } from '@/domain/utility/error/CustomException'
import { IAuthenticationService } from '@/application/auth/Authentication/IAuthenticationServiceService'
import { AuthenticationDto } from '@/application/auth/Authentication/AuthenticationDto'
import { ILoginUserRepository } from '@/domain/auth/LoginUser/ILoginUserRepository'
import { LoginUserDto } from '@/application/auth/LoginUser/LoginUserDto'

// @injectable()
export class AuthenticationService implements IAuthenticationService {
  private loginUserRepository: ILoginUserRepository

  // @inject('LoginUserRepository')
  constructor(loginUserRepository: ILoginUserRepository) {
    this.loginUserRepository = loginUserRepository
  }

  async findOne(keys: string[]): Promise<AuthenticationDto> {
    let loginUserDtos: LoginUserDto[] = []

    const account = keys[0]
    const loginUserDto = await this.loginUserRepository.findOne(keys)

    // Controllerの認証処理をここに記載する

    // 下記の更新処理をここでする。
    /*
     * アカウントが有効かどうか
     * enabled: boolean = false
     *
     * アカウントの有効期限が切れているかどうか
     * accountNonExpired: boolean = false
     *
     * 資格情報の有効期限が切れているかどうか
     * accountNonLocked: boolean = false
     *
     * アカウントがロックされているかどうかを示す
     * credentialsNonExpired: boolean = false
     */

    if (!loginUserDtos.length) {
      throw new CustomException(404, '', 'error')
    }

    return loginUserDto
  }

  // 新規登録
  async create(authenticationDto: AuthenticationDto): Promise<AuthenticationDto> {
    const loginUserDto: LoginUserDto = authenticationDto as LoginUserDto
    return await this.loginUserRepository.create(loginUserDto)
  }

  // 更新
  async update(authenticationDto: AuthenticationDto): Promise<AuthenticationDto> {
    // 下記の更新処理をここでする。
    /*
     * アカウントが有効かどうか
     * enabled: boolean = false
     *
     * アカウントの有効期限が切れているかどうか
     * accountNonExpired: boolean = false
     *
     * 資格情報の有効期限が切れているかどうか
     * accountNonLocked: boolean = false
     *
     * アカウントがロックされているかどうかを示す
     * credentialsNonExpired: boolean = false
     */
    const loginUserDto: LoginUserDto = authenticationDto as LoginUserDto

    let keys = []
    keys.push(loginUserDto['account'])
    return await this.loginUserRepository.update(keys, loginUserDto)
  }
}
