import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateAditionalFkProducts1601479303095
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "products",
      new TableForeignKey({
        name: "ProductsFKAditional",
        columnNames: ["aditional_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "aditionals",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("products", "ProductsFKAditional");
  }
}
