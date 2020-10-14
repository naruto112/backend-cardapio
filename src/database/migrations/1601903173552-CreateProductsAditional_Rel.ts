import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateProductsAditionalRel1601903173552
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products_aditionals_rel",
        columns: [
          {
            name: "product_id",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "aditional_id",
            type: "varchar(36)",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products_aditionals_rel");
  }
}
