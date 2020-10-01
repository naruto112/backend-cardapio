import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateMenuFkProducts1601479503283 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "products",
      new TableForeignKey({
        name: "MenuFKProducts",
        columnNames: ["menu_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "menu",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("products", "MenuFKProducts");
  }
}
