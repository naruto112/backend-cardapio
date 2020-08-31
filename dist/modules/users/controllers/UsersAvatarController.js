"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UpdateUsersAvatarService = _interopRequireDefault(require("../services/UpdateUsersAvatarService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersAvatarController {
  async update(request, response) {
    const updateUserAvatarService = new _UpdateUsersAvatarService.default();
    const user = await updateUserAvatarService.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

var _default = UsersAvatarController;
exports.default = _default;