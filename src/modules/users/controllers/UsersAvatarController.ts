import { Request, Response } from "express";
import UpdateUsersAvatarService from "../services/UpdateUsersAvatarService";
import { classToClass } from "class-transformer";

class UsersAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatarService = new UpdateUsersAvatarService();

    const user = await updateUserAvatarService.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.json(classToClass(user));
  }
}

export default UsersAvatarController;
