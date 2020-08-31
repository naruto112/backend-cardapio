"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _ShowProfileService = _interopRequireDefault(require("../services/ShowProfileService"));

var _UpdateProfileService = _interopRequireDefault(require("../services/UpdateProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileController {
  async show(request, response) {
    const showProfileService = new _ShowProfileService.default();
    const user_id = request.user.id;
    const user = await showProfileService.execute({
      user_id
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

  async update(request, response) {
    const updateProfileService = new _UpdateProfileService.default();
    const {
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
    } = request.body;
    const user_id = request.user.id;
    const user = await updateProfileService.execute({
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
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

var _default = ProfileController;
exports.default = _default;