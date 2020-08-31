"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _HandlebarsMailTemplateProvider = _interopRequireDefault(require("../providers/HandlebarsMailTemplateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MailProvider {
  constructor() {
    this.mailConfig = {};
    this.mailConfig = {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    };
  }

  async sendMail({
    to,
    from,
    subject,
    templateData
  }) {
    const nodeTransport = _nodemailer.default.createTransport(this.mailConfig);

    const handlebarsMailTemplateProvider = new _HandlebarsMailTemplateProvider.default();
    await nodeTransport.sendMail({
      from,
      to,
      subject,
      html: await handlebarsMailTemplateProvider.parse(templateData)
    });
  }

}

var _default = MailProvider;
exports.default = _default;