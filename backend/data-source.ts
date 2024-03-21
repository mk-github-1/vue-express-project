// ■ 追加: TypeORM設定
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { LoginUser } from './src/domain-model/entity/auth/LoginUser'
import { LoginUserRole } from './src/domain-model/entity/auth/LoginUserRole'
import { Role } from './src/domain-model/entity/auth/Role'

export const AppDataSource = new DataSource({
  // 1.利用するデータベース
  type: 'sqlite', // or mysql or postgresql
  // host: "localhost"、sqliteは不要
  // port: "", // mysqlは3306、postresqlは5423、sqliteは不要
  // username: "", // 任意、sqliteは不要
  // password: "", // 任意、sqliteは不要
  database: './data/data.db',　 // mysql, postgresqlはデータベース名

  // 2.Entityクラス
  entities: [
    // auth
    LoginUser,
    LoginUserRole,
    Role

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
})
