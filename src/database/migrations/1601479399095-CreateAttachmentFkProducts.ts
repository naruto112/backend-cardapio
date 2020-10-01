import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateAttachmentFkProducts1601479399095
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "attachments",
      new TableForeignKey({
        name: "AttachmentFKProducts",
        columnNames: ["product_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("attachments", "AttachmentFKProducts");
  }
}
