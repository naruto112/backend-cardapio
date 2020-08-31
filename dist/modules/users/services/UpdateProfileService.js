"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _BCryptHashProvider = _interopRequireDefault(require("../providers/BCryptHashProvider"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateProfileService {
  async execute({
    user_id,
    email,
    password,
    old_password,
    first_name,
    second_name,
    city,
    uf,
    cep,
    address,
    number,
    complement
  }) {
    const usersRepository = new _UsersRepository.default();
    const hashProvider = new _BCryptHashProvider.default();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new _AppError.default("User not found");
    }

    const userWithUpdatEmail = await usersRepository.findByEmail(email);

    if (userWithUpdatEmail && userWithUpdatEmail.id !== user_id) {
      throw new _AppError.default("E-mail already in use");
    }

    user.email = email;
    user.first_name = first_name;
    user.second_name = second_name;
    user.city = city;
    user.uf = uf;
    user.cep = cep;
    user.address = address;
    user.number = number;
    user.complement = complement;

    if (password && old_password) {
      const checkOldPassword = await hashProvider.compareHash(old_password, user.password);

      if (!checkOldPassword) {
        throw new _AppError.default("Old password does not match.");
      }

      user.password = await hashProvider.generateHash(password);
    }

    return usersRepository.save(user);
  }

}

var _default = UpdateProfileService;
exports.default = _default;