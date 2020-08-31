import { isAfter, addHours } from "date-fns";

import UsersTokensRepository from "../repositories/UsersTokensRepository";
import UsersRepository from "../repositories/UsersRepository";
import AppError from "../../../errors/AppError";
import BCryptHashProvider from "../providers/BCryptHashProvider";

interface IRequest {
  token: string;
  password: string;
}

class ResetPassowrdService {
  public async execute({ token, password }: IRequest): Promise<void> {
    const usersTokensRepository = new UsersTokensRepository();
    const usersRepository = new UsersRepository();
    const bycryptHashProvider = new BCryptHashProvider();

    const userToken = await usersTokensRepository.findBytoken(token);

    if (!userToken) {
      throw new AppError("User token does not exists", 401);
    }

    const user = await usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 1);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError("Token expired", 401);
    }

    user.password = await bycryptHashProvider.generateHash(password);

    await usersRepository.save(user);
  }
}

export default ResetPassowrdService;
