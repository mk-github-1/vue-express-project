import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  //  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm'
import { LoginUserEntity } from './LoginUserEntity'
import { RoleEntity } from './RoleEntity'

/**
 * LoginUserRole: ログインユーザー権限の中間テーブル
 *
 */
@Entity('auth_login_user_roles')
export class LoginUserRoleEntity {
  constructor(data: { account: string; roleId: string; sortOrder: number; isDeleted: boolean }) {
    this.account = data ? data.account : ''
    this.roleId = data ? data.roleId : ''
    this.sortOrder = data ? data.sortOrder : 0
    this.isDeleted = data ? data.isDeleted : false
  }

  @PrimaryColumn({ length: 256 })
  public account: string = ''

  @PrimaryColumn({ length: 256 })
  public roleId: string = ''

  @Column({ unsigned: true })
  public sortOrder: number = 0

  @Column()
  public isDeleted: boolean = false

  @CreateDateColumn()
  public readonly createdAt?: Date

  @UpdateDateColumn()
  public readonly updatedAt?: Date

  // LoginUser エンティティとの ManyToOne 関係
  @ManyToOne(() => LoginUserEntity, (loginUserEntity) => loginUserEntity.username, {
    createForeignKeyConstraints: false,
    persistence: false
  })
  @JoinColumn({
    name: 'account',
    referencedColumnName: 'account'
  })
  loginUserEntity?: LoginUserEntity

  // Role エンティティとの ManyToOne 関係
  @ManyToOne(() => RoleEntity, (roleEntity) => roleEntity.roleId, {
    createForeignKeyConstraints: false,
    persistence: false
  })
  @JoinColumn({
    name: 'roleId',
    referencedColumnName: 'roleId'
  })
  roleEntity?: RoleEntity
}
