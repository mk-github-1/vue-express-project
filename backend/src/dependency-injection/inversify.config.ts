import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from '@/dependency-injection/types'
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
const container = new Container()

// container.bind<"取得する時の型(インタフェース or クラス)">("識別子").to("対象クラス")

/* AppDataSourceをDIコンテナに登録 **************************************************/
container.bind<DataSource>(TYPES.DataSource).toConstantValue(AppDataSource)

// 本番環境と開発環境でデータストアを切り替えるサンプル
/*
  container.bind<DatabaseInterface>(TYPES.DataSource).toConstantValue(
    process.env.NODE_ENV === 'production' ? new DocDB() : new Mongo()
  );
 */

/* auth **************************************************/

// Authenticate
container.bind<IAuthenticationService>(TYPES.AuthenticationService).to(AuthenticationService).inSingletonScope()
container.bind<AuthenticationController>(TYPES.AuthenticationController).to(AuthenticationController).inSingletonScope()

// LoginUser
container.bind<ILoginUserRepository>(TYPES.LoginUserRepository).to(LoginUserRepository).inSingletonScope()
container.bind<ILoginUserService>(TYPES.LoginUserService).to(LoginUserService).inSingletonScope()
container.bind<LoginUserController>(TYPES.LoginUserController).to(LoginUserController).inSingletonScope()

/* master **************************************************/

/* transaction **************************************************/

/* transaction(etc) **************************************************/

export { container } // .createChild()
