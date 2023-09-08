import {MigrationInterface, QueryRunner} from "typeorm";

export class createDBtables1694180371324 implements MigrationInterface {
    name = 'createDBtables1694180371324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notes-app"."users" ("uid" uuid NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6e20ce1edf0678a09f1963f9587" PRIMARY KEY ("uid"))`);
        await queryRunner.query(`CREATE TABLE "notes-app"."notes" ("uid" uuid NOT NULL, "description" character varying(50) NOT NULL, "detail" character varying(500) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userUidUid" uuid, CONSTRAINT "PK_04602e342ac8a8a082686084835" PRIMARY KEY ("uid"))`);
        await queryRunner.query(`ALTER TABLE "notes-app"."notes" ADD CONSTRAINT "FK_016e85791182d7a83efe70b8a33" FOREIGN KEY ("userUidUid") REFERENCES "notes-app"."users"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes-app"."notes" DROP CONSTRAINT "FK_016e85791182d7a83efe70b8a33"`);
        await queryRunner.query(`DROP TABLE "notes-app"."notes"`);
        await queryRunner.query(`DROP TABLE "notes-app"."users"`);
    }

}
