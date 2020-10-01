import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateCategoryFkProducts1601479252205
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "products",
      new TableForeignKey({
        name: "ProductsFKCategory",
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("products", "ProductsFKCategory");
  }
}
