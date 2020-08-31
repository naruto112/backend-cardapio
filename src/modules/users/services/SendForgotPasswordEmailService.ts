import path from "path";
import UsersRepository from "../repositories/UsersRepository";
import UsersTokensRepository from "../repositories/UsersTokensRepository";
import AppError from "../../../errors/AppError";
import MailProvider from "../providers/MailProvider";

import Users from "../entities/Users";

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<Users> {
    const userRepository = new UsersRepository();
    const usersTokensRepository = new UsersTokensRepository();
    const mailProvider = new MailProvider();

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email not exists", 401);
    }

    const { token } = await usersTokensRepository.generate(user.id);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "views",
      "forgot_password.hbs"
    );

    await mailProvider.sendMail({
      from: {
        name: "Equipe Cardapio",
        address: "sistema@dstudium.com",
      },
      to: email,
      subject: "Equipe Cardapio",
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.first_name,
          link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`,
        },
      },
    });

    return user;
  }
}

export default SendForgotPasswordEmailService;
