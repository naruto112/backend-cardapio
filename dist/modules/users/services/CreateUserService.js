"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

var _BCryptHashProvider = _interopRequireDefault(require("../providers/BCryptHashProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUserService {
  async execute({
    email,
    password,
    first_name,
    second_name,
    phone,
    city,
    uf,
    cep,
    address,
    neighborhood,
    number,
    complement
  }) {
    const userRepository = new _UsersRepository.default();
    const hashProvider = new _BCryptHashProvider.default();
    const checkUserExists = await userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new _AppError.default("Email address already used", 401);
    }

    const hashedPassword = await hashProvider.generateHash(password);
    const user = await userRepository.create({
      email,
      password: hashedPassword,
      first_name,
      second_name,
      phone,
      city,
      uf,
      cep,
      address,
      neighborhood,
      number,
      complement
    });
    return user;
  }

}

var _default = CreateUserService;
exports.default = _default;