import path from "path";
import UsersRepository from "../repositories/UsersRepository";
import AppError from "../../../errors/AppError";
import MailProvider from "../providers/MailProvider";

interface IRequest {
  email: string;
}

class SendNewUsersEmailService {
  public async sendMail({ email }: IRequest): Promise<void> {
    const userRepository = new UsersRepository();
    const mailProvider = new MailProvider();

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email not exists", 401);
    }

    const createNewUserTemplate = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "views",
      "create_new_users.hbs"
    );

    await mailProvider.sendMail({
      from: {
        name: "Cardapio Digital",
        address: "sistema@dstudium.com",
      },
      to: email,
      subject: "Novo cadastro Cardapio Digital",
      templateData: {
        file: createNewUserTemplate,
        variables: {
          name: user.first_name,
          link: `${process.env.APP_WEB_URL}`,
        },
      },
    });
  }
}

export default SendNewUsersEmailService;
