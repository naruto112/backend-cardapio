import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1597521497106 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "email",
            type: "varchar(100)",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar(200)",
            isNullable: false,
          },
          {
            name: "first_name",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "second_name",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar(80)",
            isNullable: false,
          },
          {
            name: "uf",
            type: "varchar(50)",
            isNullable: false,
          },
          {
            name: "cep",
            type: "varchar(30)",
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "number",
            type: "numeric(20)",
            isNullable: false,
          },
          {
            name: "complement",
            type: "varchar(80)",
            isNullable: false,
          },
          {
            name: "neighborhood",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "shop",
            type: "varchar",
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
          {
            name: "avatar_url",
            type: "varchar(255)",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
