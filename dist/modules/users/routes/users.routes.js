"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../config/upload"));

var _UsersController = _interopRequireDefault(require("../controllers/UsersController"));

var _UsersAvatarController = _interopRequireDefault(require("../controllers/UsersAvatarController"));

var _ensureAuthenticated = _interopRequireDefault(require("../../../middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
const upload = (0, _multer.default)(_upload.default);
const usersController = new _UsersController.default();
const usersControllerAvatar = new _UsersAvatarController.default();
usersRouter.post("/", usersController.create);
usersRouter.patch("/avatar", _ensureAuthenticated.default, upload.single("avatar"), usersControllerAvatar.update);
var _default = usersRouter;
exports.default = _default;