import {MigrationInterface, QueryRunner} from "typeorm";

export class TestsMigration1679575050294 implements MigrationInterface {
    name = 'TestsMigration1679575050294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notes_m5" ("uid" varchar PRIMARY KEY NOT NULL, "description" varchar(50) NOT NULL, "detail" varchar(500) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "userUidUid" varchar)`);
        await queryRunner.query(`CREATE TABLE "users_m5" ("uid" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "password" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_m5"`);
        await queryRunner.query(`DROP TABLE "notes_m5"`);
    }

}
