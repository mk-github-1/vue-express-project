// TypeORM設定
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { LoginUserEntity } from './infrastructure/entity/auth/LoginUserEntity'
import { LoginUserRoleEntity } from './infrastructure/entity/auth/LoginUserRoleEntity'
import { RoleEntity } from './infrastructure/entity/auth/RoleEntity'
import { CustomNamingStrategy } from './config/typeorm/CustomNamingStrategy'

const customNamingStrategy = new CustomNamingStrategy()

export const AppDataSource = new DataSource({
  // 1.利用するデータベース
  type: 'sqlite', // or mysql or postgresql
  // host: "localhost"、sqliteは不要
  // port: "", // mysqlは3306、postresqlは5423、sqliteは不要
  // username: "", // 任意、sqliteは不要
  // password: "", // 任意、sqliteは不要
  database: './data/data.db', // mysql, postgresqlはデータベース名

  // 2.Entityクラス
  entities: [
    // auth
    LoginUserEntity,
    LoginUserRoleEntity,
    RoleEntity

    // master

    // transaction
  ],

  // 3.マイグレーションファイルの格納場所
  migrations: ['./migrations/*.ts'],

  // 4.?
  subscribers: [],

  // 5.ログを出力するか
  logging: true,

  // 6.trueにするとテーブルが自動生成される、本番環境では使用禁止
  synchronize: false

  // 7.customNamingStrategyでプロパティ名をスネークケースに変換
  // エラー
  // namingStrategy: new CustomNamingStrategy()
})
