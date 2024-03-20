// ■ 追加: TypeORM設定
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { LoginUser } from './src/domain-model/entity/auth/LoginUser'
import { LoginUserRole } from './src/domain-model/entity/auth/LoginUserRole'
import { Role } from './src/domain-model/entity/auth/Role'

export const AppDataSource = new DataSource({
  type: 'sqlite', // or mysql or postgresql
  // host: "localhost"、sqliteは不要
  // port: "", // mysqlは3306、postresqlは5423、sqliteは不要
  // username: "", // 任意、sqliteは不要
  // password: "", // 任意、sqliteは不要
  database: './data/data.db',
  synchronize: false,
  logging: false,
  entities: [
    // 1.auth
    LoginUser,
    LoginUserRole,
    Role

    // 2.master

    // 3.transaction
  ],
  migrations: ['./migrations/*.ts'],
  subscribers: []
})
