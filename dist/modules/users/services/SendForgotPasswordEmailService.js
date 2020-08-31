"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _UsersTokensRepository = _interopRequireDefault(require("../repositories/UsersTokensRepository"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

var _MailProvider = _interopRequireDefault(require("../providers/MailProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SendForgotPasswordEmailService {
  async execute({
    email
  }) {
    const userRepository = new _UsersRepository.default();
    const usersTokensRepository = new _UsersTokensRepository.default();
    const mailProvider = new _MailProvider.default();
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default("Email not exists", 401);
    }

    const {
      token
    } = await usersTokensRepository.generate(user.id);

    const forgotPasswordTemplate = _path.default.resolve(__dirname, "..", "..", "..", "views", "forgot_password.hbs");

    await mailProvider.sendMail({
      from: {
        name: "Equipe Cardapio",
        address: "sistema@dstudium.com"
      },
      to: email,
      subject: "Equipe Cardapio",
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.first_name,
          link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`
        }
      }
    });
    return user;
  }

}

var _default = SendForgotPasswordEmailService;
exports.default = _default;