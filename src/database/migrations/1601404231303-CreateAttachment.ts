import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAttachment1601404231303 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "attachments",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "product_id",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "category_id",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "url",
            type: "varchar",
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
    await queryRunner.dropTable("attachments");
  }
}
