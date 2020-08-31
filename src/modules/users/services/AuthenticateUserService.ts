import { sign } from "jsonwebtoken";
import UsersRepository from "../repositories/UsersRepository";
import AppError from "../../../errors/AppError";
import BCryptHashProvider from "../providers/BCryptHashProvider";
import authConfig from "../../../config/auth";

import Users from "../entities/Users";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: Users;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = new UsersRepository();
    const hashProvider = new BCryptHashProvider();

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Incorret email/password combination", 401);
    }

    const passwordMatched = await hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      throw new AppError("Incorret email/password combination", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
