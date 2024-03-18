import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { LoginUserRole } from './LoginUserRole';

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
    this.createdAt = createdAt ?? new Date()
    this.updatedAt = updatedAt ?? new Date()

    this.loginUserRoles = []
  }

  @PrimaryGeneratedColumn({ name: 'username'})
  @Column({ length: 256 })
  private username: string

  @Column({ length: 256, nullable: false })
  private password: string

  // アカウントが有効かどうかを示すフラグ
  @Column({ default: true })
  private enabled: boolean

  // アカウントの有効期限が切れているかどうかを示すフラグ
  @Column({ default: true })
  private accountNonExpired: boolean

  // 資格情報の有効期限が切れているかどうかを示すフラグ
  @Column({ default: true })
  private accountNonLocked: boolean

  // アカウントがロックされているかどうかを示すフラグ
  @Column({ default: true })
  private credentialsNonExpired: boolean

  @Column()
  private sortOrder?: number

  @Column({ nullable: true })
  private isDeleted: boolean

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  private createdAt: Date

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  private updatedAt: Date

  // ユーザーが持つ権限のリスト
  @OneToMany(() => LoginUserRole, loginUserRole => loginUserRole.loginUser, { cascade: true, eager: true, onDelete: 'CASCADE' })
  private loginUserRoles: LoginUserRole[]
}
