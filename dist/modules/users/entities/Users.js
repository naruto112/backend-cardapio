"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _classTransformer = require("class-transformer");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Users = (_dec = (0, _typeorm.Entity)("users"), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)("uuid"), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = (0, _classTransformer.Exclude)(), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.Column)(), _dec12 = Reflect.metadata("design:type", String), _dec13 = (0, _typeorm.Column)(), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _typeorm.Column)(), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.Column)(), _dec18 = Reflect.metadata("design:type", String), _dec19 = (0, _typeorm.Column)(), _dec20 = Reflect.metadata("design:type", String), _dec21 = (0, _typeorm.Column)(), _dec22 = Reflect.metadata("design:type", String), _dec23 = (0, _typeorm.Column)(), _dec24 = Reflect.metadata("design:type", String), _dec25 = (0, _typeorm.Column)(), _dec26 = Reflect.metadata("design:type", String), _dec27 = (0, _typeorm.Column)(), _dec28 = Reflect.metadata("design:type", String), _dec29 = (0, _typeorm.UpdateDateColumn)(), _dec30 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec31 = (0, _typeorm.CreateDateColumn)(), _dec32 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec33 = (0, _typeorm.Column)(), _dec34 = Reflect.metadata("design:type", String), _dec35 = (0, _typeorm.Column)(), _dec36 = Reflect.metadata("design:type", String), _dec37 = (0, _classTransformer.Expose)({
  name: "avatar_url"
}), _dec38 = Reflect.metadata("design:type", Function), _dec39 = Reflect.metadata("design:paramtypes", []), _dec(_class = (_class2 = (_temp = class Users {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "email", _descriptor2, this);

    _initializerDefineProperty(this, "phone", _descriptor3, this);

    _initializerDefineProperty(this, "password", _descriptor4, this);

    _initializerDefineProperty(this, "first_name", _descriptor5, this);

    _initializerDefineProperty(this, "second_name", _descriptor6, this);

    _initializerDefineProperty(this, "city", _descriptor7, this);

    _initializerDefineProperty(this, "uf", _descriptor8, this);

    _initializerDefineProperty(this, "cep", _descriptor9, this);

    _initializerDefineProperty(this, "address", _descriptor10, this);

    _initializerDefineProperty(this, "neighborhood", _descriptor11, this);

    _initializerDefineProperty(this, "number", _descriptor12, this);

    _initializerDefineProperty(this, "complement", _descriptor13, this);

    _initializerDefineProperty(this, "created_at", _descriptor14, this);

    _initializerDefineProperty(this, "updated_at", _descriptor15, this);

    _initializerDefineProperty(this, "avatar_url", _descriptor16, this);

    _initializerDefineProperty(this, "shop", _descriptor17, this);
  }

  getAvatarUrl() {
    return this.avatar_url ? `${process.env.APP_STORAGE_URL}/files/${this.avatar_url}` : "";
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "email", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "phone", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "password", [_dec8, _dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "first_name", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "second_name", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "city", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "uf", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cep", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "address", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "neighborhood", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "number", [_dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "complement", [_dec27, _dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "avatar_url", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "shop", [_dec35, _dec36], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "getAvatarUrl", [_dec37, _dec38, _dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "getAvatarUrl"), _class2.prototype)), _class2)) || _class);
var _default = Users;
exports.default = _default;