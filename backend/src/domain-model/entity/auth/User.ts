import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
// import { LoginUserRole } from './LoginUserRole'; // リレーションエンティティのインポートが必要かもしれません

@Entity()
export class User {
  constructor(
    username: string,
    password: string,
    enabled: boolean,
    accountNonExpired: boolean,
    accountNonLocked: boolean,
    credentialsNonExpired: boolean,
    sortOrder: number,
    isDeleted?: boolean,
    createdAt?: Date,
    updatedAt?: Date
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
  }

  // @PrimaryGeneratedColumn()
  @Column({ length: 256 })
  username: string

  @Column({ length: 256, nullable: false })
  password: string

  // アカウントが有効かどうかを示すフラグ
  @Column({ default: true })
  enabled: boolean

  // アカウントの有効期限が切れているかどうかを示すフラグ
  @Column({ default: true })
  accountNonExpired: boolean

  // 資格情報の有効期限が切れているかどうかを示すフラグ
  @Column({ default: true })
  accountNonLocked: boolean

  // アカウントがロックされているかどうかを示すフラグ
  @Column({ default: true })
  credentialsNonExpired: boolean

  @Column()
  sortOrder: number

  @Column({ nullable: true })
  isDeleted?: boolean

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date

  // ユーザーが持つ権限のリスト、DBからの取得用
  // @OneToMany(mappedBy = "loginUser", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
  // @OrderColumn
  // loginUserRoles: LoginUserRole[]
}
