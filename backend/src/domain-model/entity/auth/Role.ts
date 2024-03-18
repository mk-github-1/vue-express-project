import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

/**
 * Role: 権限
 *
 */
// @Table({ name: "role" })
@Entity()
export class Role {
  constructor(
    roleId: string,
    roleName: string,
    sortOrder: number,
    isDeleted: boolean,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.roleId = roleId
    this.roleName = roleName
    this.sortOrder = sortOrder
    this.isDeleted = isDeleted
    this.createdAt = createdAt
    this.updatedAt = updatedAt
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
