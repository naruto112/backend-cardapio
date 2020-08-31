"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../middlewares/ensureAuthenticated"));

var _ProfileController = _interopRequireDefault(require("../controllers/ProfileController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const profileRouter = (0, _express.Router)();
const profilController = new _ProfileController.default();
profileRouter.use(_ensureAuthenticated.default);
profileRouter.get("/", profilController.show);
profileRouter.put("/", profilController.update);
var _default = profileRouter;
exports.default = _default;