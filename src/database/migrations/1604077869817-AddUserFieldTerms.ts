import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddUserFieldTerms1604077869817 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
              name: "term",
              type: "numeric",
              isNullable: false,
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "term");
    }

}
