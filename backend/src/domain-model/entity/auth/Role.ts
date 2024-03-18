import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

/**
 * Role: 権限
 *
 */
// @Table({ name: "role" })
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

  @PrimaryGeneratedColumn({
    name: 'roleId'
  })
  @Column({ length: 256 })
  public roleId: string = ''

  @Column({ length: 32 })
  public roleName: string = ''

  @Column()
  public sortOrder: number = 0

  @Column()
  public isDeleted: boolean = false

  @Column()
  public createdAt: Date = new Date()

  @Column()
  public updatedAt: Date = new Date()
}
