import { AppDataSource } from '@/data-source'
import { LoginUser } from '@/domain-model/entity/auth/LoginUser'
import { LoginUserModel } from '@/domain-model/model/auth/LoginUserModel'

// (注)1ファイルにつき、1つのnamed exportにしてファイル名とexport名を合わせる
// ESLintでその方法を判定できるか調査が必要
export const loginUserRepository = () => {
  // 変数はclassでいうところのコンストラクタで設定するイメージ
  const appDataSource = AppDataSource

  // データ取得 (1件 or 複数件)
  const find = async (account: string): Promise<LoginUserModel[]> => {
    let loginUsers: LoginUser[] = []

    if (account) {
      loginUsers = await appDataSource
        .createQueryBuilder()
        .select()
        .from(LoginUser, 'loginUser')
        .where('loginUser.account = :account', { account: 'account' })
        .getMany()
    } else {
      loginUsers = await appDataSource.getRepository(LoginUser).find()
    }

    // entity -> model
    // プロパティや構造が一致している場合は型キャストが有効
    // サブデータはマッピングできないのである場合は手動マッピングが必要、サブデータの登録を含められるか未確認
    const loginUserModels: LoginUserModel[] = loginUsers as LoginUserModel[]

    // 手動マッピング
    /*
    const loginUserModels: LoginUserModel[] = loginUsers.map((currentValue) => {
      const loginUserModel: LoginUserModel = {
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
      return loginUserModel
    }, [])
     */

    return loginUserModels
  }

  // 登録
  const create = async (loginUserModel: LoginUserModel): Promise<LoginUserModel> => {
    // model -> entity
    // プロパティや構造が一致している場合は型キャストが有効
    // サブデータはマッピングできないのである場合は手動マッピングが必要、サブデータの登録を含められるか未確認
    const loginUser: LoginUser = loginUserModel as LoginUser
    await appDataSource.getRepository(LoginUser).create(loginUser)

    return loginUserModel
  }

  // 更新
  const update = async (id: number, loginUserModel: LoginUserModel): Promise<LoginUserModel> => {
    // model -> entity
    // プロパティや構造が一致している場合は型キャストが有効
    // サブデータはマッピングできないのである場合は手動マッピングが必要、サブデータの登録を含められるか未確認
    const loginUser: LoginUser = loginUserModel as LoginUser
    await appDataSource.getRepository(LoginUser).update(loginUser.account, loginUser)

    return loginUserModel
  }

  // 削除
  const del = async (account: string): Promise<string> => {
    // 物理削除
    await appDataSource.getRepository(LoginUser).delete(account)

    // 論理削除の例
    // await appDataSource.getRepository(LoginUser).softDelete({ account })

    return account
  }

  // 並替(サンプル、LoginUserでは使用しない)
  const sort = async (key: string): Promise<number> => {
    // SQL
    const sql: string = `
      UPDATE login_user
      SET sortOrder = 1
      WHERE key = $1
    `
    await appDataSource.query(sql, [key])

    return 0
  }

  return await {
    find,
    create,
    update,
    del,
    sort
  }
}
