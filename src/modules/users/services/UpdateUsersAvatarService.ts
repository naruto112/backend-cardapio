import Users from "../entities/Users";
import UsersRepository from "../repositories/UsersRepository";
import path from "path";
import fs from "fs";
import uploadConfig from "../../../config/upload";
import AppError from "../../../errors/AppError";

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

class UpdateUsersAvatarService {
  public async execute({ user_id, avatarFilename }: IRequest): Promise<Users> {
    const userRepository = new UsersRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can change avatar.", 401);
    }

    if (user.avatar_url) {
      const userAvatarFilpath = path.join(
        uploadConfig.directory,
        user.avatar_url
      );
      const userAvatarFilExists = await fs.promises.stat(userAvatarFilpath);

      if (userAvatarFilExists) {
        await fs.promises.unlink(userAvatarFilpath);
      }
    }

    user.avatar_url = avatarFilename;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUsersAvatarService;
