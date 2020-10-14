import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateProductsFKAditionalRel1601906006861
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "products_aditionals_rel",
      new TableForeignKey({
        name: "fkAditionalsProduct",
        columnNames: ["product_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "products_aditionals_rel",
      new TableForeignKey({
        name: "fkProductAditionals",
        columnNames: ["aditional_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "aditionals",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "products_aditionals_rel",
      "fkAditionalsProduct"
    );
    await queryRunner.dropForeignKey(
      "products_aditionals_rel",
      "fkProductAditionals"
    );
  }
}
