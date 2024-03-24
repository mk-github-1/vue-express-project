import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm'
import { LoginUserRoleEntity } from './LoginUserRoleEntity'

/**
 * LoginUser: ログインユーザー
 *
 */
// @Entity('login_user')
@Entity()
export class LoginUserEntity {
  constructor(data: {
    account: string
    username: string
    password: string
    enabled: boolean
    accountNonExpired: boolean
    accountNonLocked: boolean
    credentialsNonExpired: boolean
    sortOrder: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    loginUserRoleEntities: LoginUserRoleEntity[]
  }) {
    this.account = data ? data.account : ''
    this.username = data ? data.username : ''
    this.password = data ? data.password : ''
    this.enabled = data ? data.enabled : false
    this.accountNonExpired = data ? data.accountNonExpired : true
    this.accountNonLocked = data ? data.accountNonLocked : true
    this.credentialsNonExpired = data ? data.credentialsNonExpired : true
    this.sortOrder = data ? data.sortOrder : 0
    this.isDeleted = data ? data.isDeleted : false

    this.loginUserRoleEntities = data ? data.loginUserRoleEntities : []
  }

  @PrimaryColumn({ length: 256 })
  public account: string = ''

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

  @Column({ unsigned: true })
  public sortOrder: number = 0

  @DeleteDateColumn()
  public isDeleted: boolean = false

  @CreateDateColumn()
  public readonly createdAt?: Date

  @UpdateDateColumn()
  public readonly updatedAt?: Date

  // ユーザーが持つ権限のリスト
  @OneToMany(() => LoginUserRoleEntity, (loginUserRoleEntity) => loginUserRoleEntity.loginUserEntity, {
    createForeignKeyConstraints: false,
    persistence: false
    // cascade: true,
    // eager: true,
    // onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'account',
    referencedColumnName: 'account'
  })
  public loginUserRoleEntities: LoginUserRoleEntity[]
}
