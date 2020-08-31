"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ForgotController = _interopRequireDefault(require("../controllers/ForgotController"));

var _ResetController = _interopRequireDefault(require("../controllers/ResetController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const passwordRouter = (0, _express.Router)();
const forgotController = new _ForgotController.default();
const resetController = new _ResetController.default();
passwordRouter.post("/forgot", forgotController.create);
passwordRouter.post("/reset", resetController.create);
var _default = passwordRouter;
exports.default = _default;