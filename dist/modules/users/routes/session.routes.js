"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _SessionsController = _interopRequireDefault(require("../controllers/SessionsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionRouter = (0, _express.Router)();
const sessionController = new _SessionsController.default();
sessionRouter.post("/", sessionController.create);
var _default = sessionRouter;
exports.default = _default;