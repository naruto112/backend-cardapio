"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddShopFieldToUsers1599702032763 = void 0;

var _typeorm = require("typeorm");

class AddShopFieldToUsers1599702032763 {
  async up(queryRunner) {
    await queryRunner.addColumn("users", new _typeorm.TableColumn({
      name: "shop",
      type: "varchar",
      isNullable: false
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("users", "shop");
  }

}

exports.AddShopFieldToUsers1599702032763 = AddShopFieldToUsers1599702032763;