"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddContactFieldToUsers1597952829696 = void 0;

var _typeorm = require("typeorm");

class AddContactFieldToUsers1597952829696 {
  async up(queryRunner) {
    await queryRunner.addColumn("users", new _typeorm.TableColumn({
      name: "phone",
      type: "varchar",
      isNullable: false
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("users", "avatar");
  }

}

exports.AddContactFieldToUsers1597952829696 = AddContactFieldToUsers1597952829696;