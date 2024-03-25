// InversifyのDIで用いる識別子を追加する
export const TYPES = {
  // AppDataSource
  DataSource: Symbol.for('DataSource'),
  // DataSourceManager: Symbol.for("DataSourceManager"),

  /* auth **************************************************/

  // Auth
  AuthenticationController: Symbol.for('AuthenticationController'),
  AuthenticationService: Symbol.for('AuthenticationService'),

  // LoginUser
  LoginUserController: Symbol.for('LoginUserController'),
  LoginUserService: Symbol.for('LoginUserService'),
  LoginUserRepository: Symbol.for('LoginUserRepository')

  /* master **************************************************/

  /* transaction **************************************************/

  /* transaction(etc) **************************************************/
}
