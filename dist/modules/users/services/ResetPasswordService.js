"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dateFns = require("date-fns");

var _UsersTokensRepository = _interopRequireDefault(require("../repositories/UsersTokensRepository"));

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

var _BCryptHashProvider = _interopRequireDefault(require("../providers/BCryptHashProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResetPassowrdService {
  async execute({
    token,
    password
  }) {
    const usersTokensRepository = new _UsersTokensRepository.default();
    const usersRepository = new _UsersRepository.default();
    const bycryptHashProvider = new _BCryptHashProvider.default();
    const userToken = await usersTokensRepository.findBytoken(token);

    if (!userToken) {
      throw new _AppError.default("User token does not exists", 401);
    }

    const user = await usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new _AppError.default("User does not exists", 401);
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = (0, _dateFns.addHours)(tokenCreatedAt, 1);

    if ((0, _dateFns.isAfter)(Date.now(), compareDate)) {
      throw new _AppError.default("Token expired", 401);
    }

    user.password = await bycryptHashProvider.generateHash(password);
    await usersRepository.save(user);
  }

}

var _default = ResetPassowrdService;
exports.default = _default;