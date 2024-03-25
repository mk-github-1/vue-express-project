import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from '@/config/inversify/types'
import { DataSource } from 'typeorm'
import { AppDataSource } from '@/data-source'

import { IAuthenticationService } from '@/application/auth/Authentication/IAuthenticationService'
import { AuthenticationService } from '@/application/auth/Authentication/AuthenticationService'
import { AuthenticationController } from '@/interface/Controller/auth/AuthenticationController'

import { ILoginUserRepository } from '@/domain/auth/LoginUser/ILoginUserRepository'
import { LoginUserRepository } from '@/infrastructure/repository/auth/LoginUser/LoginUserRepository'
import { ILoginUserService } from '@/application/auth/LoginUser/ILoginUserService'
import { LoginUserService } from '@/application/auth/LoginUser/LoginUserService'
import { LoginUserController } from '@/interface/Controller/auth/LoginUserController'

// 実際の依存関係を追加する ※基本的にシングルトンスコープにする、他の設定にする場合は構築しながら調査
const rootContainer = new Container()

// container.bind<"取得する時の型">("識別子").to("登録対象クラス")

/* auth **************************************************/

// Authenticate
rootContainer.bind<IAuthenticationService>(TYPES.AuthenticationService).to(AuthenticationService).inSingletonScope()
rootContainer
  .bind<AuthenticationController>(TYPES.AuthenticationController)
  .to(AuthenticationController)
  .inSingletonScope()

// LoginUser
rootContainer.bind<ILoginUserRepository>(TYPES.LoginUserRepository).to(LoginUserRepository).inSingletonScope()
rootContainer.bind<ILoginUserService>(TYPES.LoginUserService).to(LoginUserService).inSingletonScope()
rootContainer.bind<LoginUserController>(TYPES.LoginUserController).to(LoginUserController).inSingletonScope()

/* master **************************************************/

/* transaction **************************************************/

/* transaction(etc) **************************************************/

/* AppDataSource **************************************************/
/*
const dataSource = createDataSource(appDataSource);
rootContainer.bind<DataSource>('DataSource').toConstantValue(dataSource);
 */
/*
const appDataSourceFactory = async (): Promise<Connection> => {
  return createConnection(connection options)
}
container.bind<Connection>('AppDataSource').toDynamicValue(appDataSourceFactory).inSingletonScope()
 */

// 本番環境と開発環境でデータストアを切り替えるサンプル
/*
  container.bind<DatabaseInterface>(TYPES.AppDataSource).toConstantValue(
    process.env.NODE_ENV === 'production' ? new DocDB() : new Mongo()
  );
 */
const container = rootContainer.createChild()

export { container }