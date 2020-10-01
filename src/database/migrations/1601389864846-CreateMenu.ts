import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMenu1601389864846 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "menu",
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
            name: "sequence",
            type: "INT(19)",
            isNullable: false,
          },
          {
            name: "visible",
            type: "INT(2)",
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
    await queryRunner.dropTable("menu");
  }
}
