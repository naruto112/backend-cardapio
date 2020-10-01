import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAditionals1601404007029 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "aditionals",
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
            name: "quantity",
            type: "INT(19)",
            isNullable: false,
          },
          {
            name: "price",
            type: "decimal(11,2)",
            isNullable: false,
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
    await queryRunner.dropTable("aditionals");
  }
}
