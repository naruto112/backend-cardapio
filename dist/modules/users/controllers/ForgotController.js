"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SendForgotPasswordEmailService = _interopRequireDefault(require("../services/SendForgotPasswordEmailService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ForgotController {
  async create(request, response) {
    const {
      email
    } = request.body;
    const sendForgotPasswordEmailService = new _SendForgotPasswordEmailService.default();
    await sendForgotPasswordEmailService.execute({
      email
    });
    return response.status(204).json();
  }

}

var _default = ForgotController;
exports.default = _default;