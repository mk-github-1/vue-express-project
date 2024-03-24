export class AuthenticationDto {
  /*
  constructor(data: {
    account: string
    username: string
    password: string
    enabled: boolean
    accountNonExpired: boolean
    accountNonLocked: boolean
    credentialsNonExpired: boolean
    sortOrder: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    // loginUserRole: LoginUserRole[]
  }) {
    this.account = data ? data.account : ''
    this.username = data ? data.username : ''
    this.password = data ? data.password : ''
    this.enabled = data ? data.enabled : false
    this.accountNonExpired = data ? data.accountNonExpired : true
    this.accountNonLocked = data ? data.accountNonLocked : true
    this.credentialsNonExpired = data ? data.credentialsNonExpired : true
    this.sortOrder = data ? data.sortOrder : 0
    this.isDeleted = data ? data.isDeleted : false

    // ■ 作成日時、更新日時の自動更新処理が必要
    this.createdAt = data ? data.createdAt : new Date()
    this.updatedAt = data ? data.updatedAt : new Date()

    // this.loginUserRoles = data ? data.loginUserRole : []
  }
   */

  readonly account: string = ''

  readonly username: string = ''

  password: string = ''

  // アカウントが有効かどうかを示すフラグ
  enabled: boolean = false

  // アカウントの有効期限が切れているかどうかを示すフラグ
  accountNonExpired: boolean = false

  // 資格情報の有効期限が切れているかどうかを示すフラグ
  accountNonLocked: boolean = false

  // アカウントがロックされているかどうかを示すフラグ
  credentialsNonExpired: boolean = false

  sortOrder: number = 0

  isDeleted: boolean = false

  createdAt: Date = new Date()

  updatedAt: Date = new Date()

  // ユーザーが持つ権限のリスト
  /*
  loginUserRoles: LoginUserRole[]
   */
}
