import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'
import { LoginUserRole } from './LoginUserRole'

/**
 * LoginUser: ログインユーザー
 *
 */
// @Table({ name: "login_user" })
@Entity()
export class LoginUser {
  constructor(
    username: string,
    password: string,
    enabled: boolean,
    accountNonExpired: boolean,
    accountNonLocked: boolean,
    credentialsNonExpired: boolean,
    sortOrder: number,
    isDeleted: boolean,
    createdAt: Date,
    updatedAt: Date,
    loginUserRole: LoginUserRole[]
  ) {
    this.username = username
    this.password = password
    this.enabled = enabled
    this.accountNonExpired = accountNonExpired
    this.accountNonLocked = accountNonLocked
    this.credentialsNonExpired = credentialsNonExpired
    this.sortOrder = sortOrder
    this.isDeleted = isDeleted

    // ■ 作成日時、更新日時の自動更新処理が必要
    this.createdAt = createdAt
    this.updatedAt = updatedAt

    this.loginUserRoles = []
  }

  @PrimaryGeneratedColumn({
    name: 'username'
  })
  @Column({ length: 256 })
  public username: string = ''

  @Column({ length: 256 })
  public password: string = ''

  // アカウントが有効かどうかを示すフラグ
  @Column()
  public enabled: boolean = false

  // アカウントの有効期限が切れているかどうかを示すフラグ
  @Column()
  public accountNonExpired: boolean = false

  // 資格情報の有効期限が切れているかどうかを示すフラグ
  @Column()
  public accountNonLocked: boolean = false

  // アカウントがロックされているかどうかを示すフラグ
  @Column()
  public credentialsNonExpired: boolean = false

  @Column()
  public sortOrder: number = 0

  @Column()
  public isDeleted: boolean = false

  /*
  @Column({
    // type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP'
  })
   */
  @Column()
  public createdAt: Date = new Date()

  @Column()
  public updatedAt: Date = new Date()

  // ユーザーが持つ権限のリスト
  @OneToMany(() => LoginUserRole, (loginUserRole) => loginUserRole.loginUser, {
    createForeignKeyConstraints: false,
    persistence: false,
    cascade: true,
    eager: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'username',
    referencedColumnName: 'username'
  })
  public loginUserRoles: LoginUserRole[]
}
