/*
 * 共用するデータベース設定(開発用)
 * ・TypeORMのマイグレーション設定
 * ・Rest.jsのTypeORM設定
 */

type SupportedDatabaseType = 'mysql';

export const sharedConfig: {
  type: SupportedDatabaseType;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
  logging: boolean;
  entities: string[];
  migrations: string[];
  subscribers: any[];
} = {
  type: 'mysql',
  host: 'localhost',
  port: xxx,
  username: 'xxxx',
  password: 'xxxz',
  database: 'test_db',
  synchronize: false,
  logging: false,
  entities: [],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
};
