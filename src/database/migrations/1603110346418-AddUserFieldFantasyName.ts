import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUserFieldFantasyName1603110346418
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "fantasy_name",
        type: "varchar(100)",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "fantasy_name");
  }
}
