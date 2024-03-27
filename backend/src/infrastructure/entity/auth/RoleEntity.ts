import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  // DeleteDateColumn,
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
@Entity('auth_roles')
export class RoleEntity {
  constructor(data: { roleId: string; roleName: string; sortOrder: number; isDeleted: boolean }) {
    this.roleId = data ? data.roleId : ''
    this.roleName = data ? data.roleName : ''
    this.sortOrder = data ? data.sortOrder : 0
    this.isDeleted = data ? data.isDeleted : false
  }

  @PrimaryColumn({ length: 256 })
  public roleId: string = ''

  @Column({ length: 32 })
  public roleName: string = ''

  @Column({ unsigned: true })
  public sortOrder: number = 0

  @Column()
  public isDeleted: boolean = false

  @CreateDateColumn()
  public readonly createdAt?: Date

  @UpdateDateColumn()
  public readonly updatedAt?: Date
}
