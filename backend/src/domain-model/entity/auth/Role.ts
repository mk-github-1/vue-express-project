import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

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
        this.roleId = roleId;
        this.roleName = roleName;
        this.sortOrder = sortOrder;
        this.isDeleted = isDeleted;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    
    @PrimaryGeneratedColumn({ name: 'roleId'})
	@Column({length: 32})
	private roleId : string

	@Column({ length: 32, nullable: false })
	private roleName: string

	@Column({nullable: false})
    private sortOrder?: number;

	@Column({nullable: false})
    private isDeleted: boolean;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    private createdAt: Date

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    private updatedAt: Date
}
