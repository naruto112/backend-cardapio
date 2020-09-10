import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddNeighborhoodFieldToUsersts1598319610501
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "neighborhood",
        type: "varchar",
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "neighborhood");
  }
}
