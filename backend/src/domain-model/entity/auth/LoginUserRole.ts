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
  constructor(data: {
    username: string
    roleId: string
    sortOrder: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    loginUser: LoginUser
    role: Role
  }) {
    this.username = data ? data.username : ''
    this.roleId = data ? data.roleId : ''
    this.sortOrder = data ? data.sortOrder : 0
    this.isDeleted = data ? data.isDeleted : false
    this.createdAt = data ? data.createdAt : new Date()
    this.updatedAt = data ? data.updatedAt : new Date()

    // this.loginUser = data ? data.loginUser : null
    // this.role = data ? data.role : null
  }

  @PrimaryGeneratedColumn({
    name: 'username'
  })
  @Column({ length: 256 })
  public username: string = ''

  @PrimaryGeneratedColumn({
    name: 'roleId'
  })
  @Column({ length: 256 })
  public roleId: string = ''

  @Column()
  public sortOrder: number = 0

  @Column()
  public isDeleted: boolean = false

  @Column()
  public createdAt: Date = new Date()

  @Column()
  public updatedAt: Date = new Date()

  // LoginUser エンティティとの ManyToOne 関係
  @ManyToOne(() => LoginUser, (loginUser) => loginUser.username, {
    createForeignKeyConstraints: false,
    persistence: false
  })
  @JoinColumn({
    name: 'username',
    referencedColumnName: 'username'
  })
  loginUser?: LoginUser

  // Role エンティティとの ManyToOne 関係
  @ManyToOne(() => Role, (role) => role.roleId, {
    createForeignKeyConstraints: false,
    persistence: false
  })
  @JoinColumn({
    name: 'roleId',
    referencedColumnName: 'roleId'
  })
  role?: Role
}
