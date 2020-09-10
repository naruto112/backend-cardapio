"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNeighborhoodFieldToUsersts1598319610501 = void 0;

var _typeorm = require("typeorm");

class AddNeighborhoodFieldToUsersts1598319610501 {
  async up(queryRunner) {
    await queryRunner.addColumn("users", new _typeorm.TableColumn({
      name: "neighborhood",
      type: "varchar",
      isNullable: false
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("users", "neighborhood");
  }

}

exports.AddNeighborhoodFieldToUsersts1598319610501 = AddNeighborhoodFieldToUsersts1598319610501;