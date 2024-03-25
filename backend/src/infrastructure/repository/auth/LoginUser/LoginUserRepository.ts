import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { AppDataSource } from '@/data-source'
import { ILoginUserRepository } from '@/domain/auth/LoginUser/ILoginUserRepository'
import { LoginUserEntity } from '@/infrastructure/entity/auth/LoginUserEntity'
import { LoginUserDto } from '@/application/auth/LoginUser/LoginUserDto'

@injectable()
export class LoginUserRepository implements ILoginUserRepository {
  private appDataSource = AppDataSource

  /*
  private appDataSource: IAppDataSource

  constructor(@inject("IAppDataSource") appDataSource: IAppDataSource) {
    this.appDataSource = appDataSource
  }
   */

  // データ取得 (複数件 or 1件)
  async find(): Promise<LoginUserDto[]> {
    const loginUserEntities: LoginUserEntity[] = await this.appDataSource.getRepository(LoginUserEntity).find()

    // entity -> model
    // プロパティや構造が一致している場合は型キャストが有効
    // サブデータはマッピングできないのである場合は手動マッピングが必要、サブデータの登録を含められるか未確認
    const loginUserDtos: LoginUserDto[] = loginUserEntities as LoginUserDto[]

    // 手動マッピング
    /*
    const loginUserDtos: LoginUserDto[] = loginUsers.map((currentValue) => {
      const loginUserDto: LoginUserDto = {
        account: currentValue.account,
        username: currentValue.username,
        password: currentValue.password,
        enabled: currentValue.enabled,
        accountNonExpired: currentValue.accountNonExpired,
        accountNonLocked: currentValue.accountNonLocked,
        credentialsNonExpired: currentValue.credentialsNonExpired,
        sortOrder: currentValue.sortOrder,
        isDeleted: currentValue.isDeleted,
        createdAt: currentValue.createdAt,
        updatedAt: currentValue.updatedAt
        // loginUserRole: currentValue.loginUserRoles
      }
      return loginUserDto
    }, [])
     */

    return loginUserDtos
  }

  async findOne(keys: string[]): Promise<LoginUserDto> {
    const account = keys[0]

    const loginUserEntities = await this.appDataSource
      .createQueryBuilder()
      .select()
      .from(LoginUserEntity, 'loginUser')
      .where('loginUser.account = :account', { account: account })
      .getMany()

    // entity -> model
    // プロパティや構造が一致している場合は型キャストが有効
    // サブデータはマッピングできないのである場合は手動マッピングが必要、サブデータの登録を含められるか未確認
    const loginUserDto: LoginUserDto = loginUserEntities[0] as LoginUserDto

    return loginUserDto
  }

  // 登録
  async create(loginUserDto: LoginUserDto): Promise<LoginUserDto> {
    // model -> entity
    // プロパティや構造が一致している場合は型キャストが有効
    // サブデータはマッピングできないのである場合は手動マッピングが必要、サブデータの登録を含められるか未確認
    const loginUserEntity: LoginUserEntity = loginUserDto as LoginUserEntity
    await this.appDataSource.getRepository(LoginUserEntity).create(loginUserEntity)

    return loginUserDto
  }

  // 更新
  async update(keys: string[], loginUserDto: LoginUserDto): Promise<LoginUserDto> {
    const account = keys[0]

    // model -> entity
    // プロパティや構造が一致している場合は型キャストが有効
    // サブデータはマッピングできないのである場合は手動マッピングが必要、サブデータの登録を含められるか未確認
    const loginUserEntity: LoginUserEntity = loginUserDto as LoginUserEntity
    await this.appDataSource.getRepository(LoginUserEntity).update(account, loginUserEntity)

    return loginUserDto
  }

  // 削除
  async delete(keys: string[]): Promise<string> {
    const account = keys[0]

    // 物理削除
    await this.appDataSource.getRepository(LoginUserEntity).delete(account)

    // 論理削除の例
    // await this.appDataSource.getRepository(LoginUserEntity).softDelete({ account })

    return account
  }

  // ソート(サンプル、LoginUserでは使用しない)
  async sort<T extends { key: string; value: number }>(lists: T[]): Promise<number> {
    // 同じ順序がある時、更新日の新しいものを上にする、isDeleted == trueは順序を後にする
    let sql = `
      DECLARE @temp TABLE (
        account int NOT NULL,
        sortOrder int NOT NULL
      )
    `

    lists.forEach((currentValue) => {
      sql += `
        INSERT INTO @temp (account, sortOrder) VALUES ('${currentValue.key}', '${currentValue.value}')
      `
    })

    sql =
      sql +
      `
      UPDATE login_user
      SET sortOrder = B.sortOrder
      FROM login_user AS A
      LEFT OUTER JOIN (
        SELECT C.id, ROW_NUMBER() OVER (
          ORDER BY
            C.isDeleted ASC,
            D.sortOrder ASC,
            C.updatedAt DESC
        ) AS 'sortOrder'
        FROM login_user AS C
        LEFT OUTER JOIN @temp AS D
        ON C.id = D.id
      ) AS B
      ON A.id = B.id
      WHERE B.id IS NOT NULL
    `

    await this.appDataSource.query(sql)

    return 0
  }
}
