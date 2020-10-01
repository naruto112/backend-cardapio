import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateTokenFkUser1601480271462 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "user_tokens",
      new TableForeignKey({
        name: "TokenFKUser",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("user_tokens", "TokenFKUser");
  }
}
