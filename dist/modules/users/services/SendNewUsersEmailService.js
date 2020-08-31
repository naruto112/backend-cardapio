"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _UsersRepository = _interopRequireDefault(require("../repositories/UsersRepository"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

var _MailProvider = _interopRequireDefault(require("../providers/MailProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SendNewUsersEmailService {
  async sendMail({
    email
  }) {
    const userRepository = new _UsersRepository.default();
    const mailProvider = new _MailProvider.default();
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default("Email not exists", 401);
    }

    const createNewUserTemplate = _path.default.resolve(__dirname, "..", "..", "..", "views", "create_new_users.hbs");

    await mailProvider.sendMail({
      from: {
        name: "Cardapio Digital",
        address: "sistema@dstudium.com"
      },
      to: email,
      subject: "Novo cadastro Cardapio Digital",
      templateData: {
        file: createNewUserTemplate,
        variables: {
          name: user.first_name,
          link: `${process.env.APP_WEB_URL}`
        }
      }
    });
  }

}

var _default = SendNewUsersEmailService;
exports.default = _default;