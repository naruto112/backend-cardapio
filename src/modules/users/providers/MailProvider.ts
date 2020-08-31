import nodeMailer from "nodemailer";

import HandlebarsMailTemplateProvider from "../providers/HandlebarsMailTemplateProvider";

interface ISendMail {
  to: string;
  from: {
    name: string;
    address: string;
  };
  subject: string;
  templateData: {
    file: string;
    variables: {
      [key: string]: string | number;
    };
  };
}

class MailProvider {
  private mailConfig = {};

  constructor() {
    this.mailConfig = {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    };
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMail): Promise<void> {
    const nodeTransport = nodeMailer.createTransport(this.mailConfig);
    const handlebarsMailTemplateProvider = new HandlebarsMailTemplateProvider();

    await nodeTransport.sendMail({
      from,
      to,
      subject,
      html: await handlebarsMailTemplateProvider.parse(templateData),
    });
  }
}

export default MailProvider;
