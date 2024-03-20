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
import { LoginUserRole } from './LoginUserRole'

/**
 * LoginUser: ログインユーザー
 *
 */
// @Entity('login_user')
@Entity()
export class LoginUser {
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
    loginUserRole: LoginUserRole[]
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

    // ■ 作成日時、更新日時の自動更新処理が必要
    this.createdAt = data ? data.createdAt : new Date()
    this.updatedAt = data ? data.updatedAt : new Date()

    this.loginUserRoles = data ? data.loginUserRole : []
  }

  @PrimaryColumn({
    name: 'account'
  })
  @Column({ length: 256 })
  public readonly account: string = ''

  @Column({ length: 256 })
  public readonly username: string = ''

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
  @CreateDateColumn()
  public createdAt: Date = new Date()

  @UpdateDateColumn()
  public updatedAt: Date = new Date()

  // ユーザーが持つ権限のリスト
  @OneToMany(() => LoginUserRole, (loginUserRole) => loginUserRole.loginUser, {
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
  public loginUserRoles: LoginUserRole[]
}
