"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

var _BCryptHashProvider = _interopRequireDefault(require("../providers/BCryptHashProvider"));

var _auth = _interopRequireDefault(require("../../../config/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticateUserService {
  async execute({
    email,
    password
  }) {
    const usersRepository = new _UsersRepository.default();
    const hashProvider = new _BCryptHashProvider.default();
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default("Incorret email/password combination", 401);
    }

    const passwordMatched = await hashProvider.compareHash(password, user.password);

    if (!passwordMatched) {
      throw new _AppError.default("Incorret email/password combination", 401);
    }

    const {
      secret,
      expiresIn
    } = _auth.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      subject: user.id,
      expiresIn
    });
    return {
      user,
      token
    };
  }

}

var _default = AuthenticateUserService;
exports.default = _default;