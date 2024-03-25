import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1711407447584 implements MigrationInterface {
    name = 'Migration1711407447584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "role_entity" (
                "roleId" varchar(256) PRIMARY KEY NOT NULL,
                "roleName" varchar(32) NOT NULL,
                "sortOrder" integer NOT NULL,
                "isDeleted" boolean NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "login_user_role_entity" (
                "account" varchar(256) NOT NULL,
                "roleId" varchar(256) NOT NULL,
                "sortOrder" integer NOT NULL,
                "isDeleted" boolean NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
                PRIMARY KEY ("account", "roleId")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "login_user_entity" (
                "account" varchar(256) PRIMARY KEY NOT NULL,
                "username" varchar(256) NOT NULL,
                "password" varchar(256) NOT NULL,
                "enabled" boolean NOT NULL,
                "accountNonExpired" boolean NOT NULL,
                "accountNonLocked" boolean NOT NULL,
                "credentialsNonExpired" boolean NOT NULL,
                "sortOrder" integer NOT NULL,
                "isDeleted" boolean NOT NULL,
                "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
                "updatedAt" datetime NOT NULL DEFAULT (datetime('now'))
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "login_user_entity"
        `);
        await queryRunner.query(`
            DROP TABLE "login_user_role_entity"
        `);
        await queryRunner.query(`
            DROP TABLE "role_entity"
        `);
    }

}
