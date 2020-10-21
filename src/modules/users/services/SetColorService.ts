import Users from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  user_id: string;
  color: string;
}

class SetColorService {
  public async execute({ user_id, color }: IRequest): Promise<Users> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found", 401);
    }

    user.color = JSON.stringify(color);

    return usersRepository.save(user);
  }
}

export default SetColorService;
