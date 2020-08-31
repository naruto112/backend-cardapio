"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ResetPasswordService = _interopRequireDefault(require("../services/ResetPasswordService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResetController {
  async create(request, response) {
    const {
      password,
      token
    } = request.body;
    const resetPasswordService = new _ResetPasswordService.default();
    await resetPasswordService.execute({
      token,
      password
    });
    return response.status(204).json();
  }

}

var _default = ResetController;
exports.default = _default;