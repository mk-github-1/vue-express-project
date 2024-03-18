import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { LoginUser } from './LoginUser'
import { Role } from './Role'
// import { Role } from './Role';

/**
 * LoginUserRole: ログインユーザー権限の中間テーブル
 *
 */
// @Table({ name: "login_user_role" })
@Entity()
export class LoginUserRole {
  constructor(
    username: string,
    roleId: number,
    sortOrder: number,
    isDeleted: boolean,
    createdAt: Date,
    updatedAt: Date
    // loginUser: LoginUser,
    // role: Role
  ) {
    this.username = username
    this.roleId = roleId
    this.sortOrder = sortOrder
    this.isDeleted = isDeleted
    this.createdAt = createdAt ?? new Date()
    this.updatedAt = updatedAt ?? new Date()
    // this.loginUser = null
    // this.role = null
  }

  @PrimaryGeneratedColumn({ name: 'username'})
  @Column({ length: 256 })
  private username: string

  @Column({ length: 256, nullable: false })
  private roleId: number

  @Column()
  private sortOrder?: number

  @Column({ nullable: true })
  private isDeleted: boolean

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  private createdAt: Date

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  private updatedAt: Date

    // LoginUser エンティティとの ManyToOne 関係
    // @ManyToOne(() => LoginUser, { fetch: 'LAZY' })
    // @JoinColumn({ name: 'username', referencedColumnName: 'username', insert: false, update: false })
    loginUser?: LoginUser;

    // Role エンティティとの ManyToOne 関係
    // @ManyToOne(() => Role, { fetch: 'LAZY' })
    // @JoinColumn({ name: 'roleId', referencedColumnName: 'roleId', insert: false, update: false })
    role?: Role;
}
