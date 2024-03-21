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

/**
 * Role: 権限
 *
 */
// @Entity('role')
@Entity()
export class Role {
  constructor(data: {
    roleId: string
    roleName: string
    sortOrder: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
  }) {
    this.roleId = data ? data.roleId : ''
    this.roleName = data ? data.roleName : ''
    this.sortOrder = data ? data.sortOrder : 0
    this.isDeleted = data ? data.isDeleted : false
    this.createdAt = data ? data.createdAt : new Date()
    this.updatedAt = data ? data.updatedAt : new Date()
  }

  @PrimaryColumn({ length: 256 })
  public readonly roleId: string = ''

  @Column({ length: 32 })
  public roleName: string = ''

  @Column()
  public sortOrder: number = 0

  @Column()
  public isDeleted: boolean = false

  @CreateDateColumn()
  public createdAt: Date = new Date()

  @UpdateDateColumn()
  public updatedAt: Date = new Date()
}
