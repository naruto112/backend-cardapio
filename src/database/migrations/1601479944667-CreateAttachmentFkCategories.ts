import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateAttachmentFkCategories1601479944667
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "attachments",
      new TableForeignKey({
        name: "AttachmentFKCategories",
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("attachments", "AttachmentFKCategories");
  }
}
