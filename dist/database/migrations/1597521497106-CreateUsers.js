"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsers1597521497106 = void 0;

var _typeorm = require("typeorm");

class CreateUsers1597521497106 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "users",
      columns: [{
        name: "id",
        type: "varchar",
        isPrimary: true,
        generationStrategy: "uuid"
      }, {
        name: "email",
        type: "varchar(100)",
        isUnique: true,
        isNullable: false
      }, {
        name: "password",
        type: "varchar(200)",
        isNullable: false
      }, {
        name: "first_name",
        type: "varchar(100)",
        isNullable: false
      }, {
        name: "second_name",
        type: "varchar(100)",
        isNullable: false
      }, {
        name: "city",
        type: "varchar(80)",
        isNullable: false
      }, {
        name: "uf",
        type: "varchar(50)",
        isNullable: false
      }, {
        name: "cep",
        type: "numeric(30)",
        isNullable: false
      }, {
        name: "address",
        type: "varchar(100)",
        isNullable: false
      }, {
        name: "number",
        type: "numeric(20)",
        isNullable: false
      }, {
        name: "complement",
        type: "varchar(80)",
        isNullable: false
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }, {
        name: "updated_at",
        type: "timestamp",
        default: "now()"
      }, {
        name: "avatar_url",
        type: "varchar(255)",
        isNullable: true
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("users");
  }

}

exports.CreateUsers1597521497106 = CreateUsers1597521497106;