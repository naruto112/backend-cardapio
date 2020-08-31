"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _CreateUserService = _interopRequireDefault(require("../services/CreateUserService"));

var _SendNewUsersEmailService = _interopRequireDefault(require("../services/SendNewUsersEmailService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async create(request, response) {
    const createUserService = new _CreateUserService.default();
    const sendNewUserEmailService = new _SendNewUsersEmailService.default();
    const {
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
    } = request.body;
    const user = await createUserService.execute({
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
    });
    await sendNewUserEmailService.sendMail({
      email
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

exports.default = UserController;