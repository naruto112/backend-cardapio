import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1601391101984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "owner",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar(50)",
            isNullable: false,
          },
          {
            name: "price",
            type: "decimal(11,2)",
            isNullable: false,
          },
          {
            name: "description",
            type: "TEXT",
            isNullable: false,
          },
          {
            name: "stock",
            type: "int(100)",
          },
          {
            name: "category_id",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "menu_id",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "aditional_id",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}