import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm'
import { LoginUser } from './LoginUser'
import { Role } from './Role'

/**
 * LoginUserRole: ログインユーザー権限の中間テーブル
 *
 */
// @Entity('login_user_role')
@Entity()
export class LoginUserRole {
  constructor(data: {
    account: string
    roleId: string
    sortOrder: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    loginUser: LoginUser
    role: Role
  }) {
    this.account = data ? data.account : ''
    this.roleId = data ? data.roleId : ''
    this.sortOrder = data ? data.sortOrder : 0
    this.isDeleted = data ? data.isDeleted : false
    this.createdAt = data ? data.createdAt : new Date()
    this.updatedAt = data ? data.updatedAt : new Date()

    // this.loginUser = data ? data.loginUser : null
    // this.role = data ? data.role : null
  }

  @PrimaryGeneratedColumn({
    name: 'account'
  })
  @Column({ length: 256 })
  public readonly account: string = ''

  @PrimaryGeneratedColumn({
    name: 'roleId'
  })
  @Column({ length: 256 })
  public roleId: string = ''

  @Column()
  public sortOrder: number = 0

  @Column()
  public isDeleted: boolean = false

  @CreateDateColumn()
  public createdAt: Date = new Date()

  @UpdateDateColumn()
  public updatedAt: Date = new Date()

  // LoginUser エンティティとの ManyToOne 関係
  @ManyToOne(() => LoginUser, (loginUser) => loginUser.username, {
    createForeignKeyConstraints: false,
    persistence: false
  })
  @JoinColumn({
    name: 'account',
    referencedColumnName: 'account'
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
