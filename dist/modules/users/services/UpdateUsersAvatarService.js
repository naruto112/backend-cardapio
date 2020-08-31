"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _upload = _interopRequireDefault(require("../../../config/upload"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateUsersAvatarService {
  async execute({
    user_id,
    avatarFilename
  }) {
    const userRepository = new _UsersRepository.default();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new _AppError.default("Only authenticated users can change avatar.", 401);
    }

    if (user.avatar_url) {
      const userAvatarFilpath = _path.default.join(_upload.default.directory, user.avatar_url);

      const userAvatarFilExists = await _fs.default.promises.stat(userAvatarFilpath);

      if (userAvatarFilExists) {
        await _fs.default.promises.unlink(userAvatarFilpath);
      }
    }

    user.avatar_url = avatarFilename;
    await userRepository.save(user);
    return user;
  }

}

var _default = UpdateUsersAvatarService;
exports.default = _default;