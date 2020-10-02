import AppError from "../../../errors/AppError";

import Users from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";

interface IRequest {
  user_id: string;
}

class ShowProfileService {
  public async execute({ user_id }: IRequest): Promise<Users> {
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }
}

export default ShowProfileService;
