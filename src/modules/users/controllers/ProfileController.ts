import { Request, Response } from "express";
import { classToClass } from "class-transformer";

import ShowProfileService from "../services/ShowProfileService";
import UpdateProfileService from "../services/UpdateProfileService";

class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfileService = new ShowProfileService();
    const user_id = request.user.id;

    const user = await showProfileService.execute({
      user_id,
    });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateProfileService = new UpdateProfileService();
    const {
      email,
      password,
      old_password,
      first_name,
      second_name,
      city,
      uf,
      cep,
      address,
      number,
      complement,
    } = request.body;
    const user_id = request.user.id;

    const user = await updateProfileService.execute({
      user_id,
      email,
      password,
      old_password,
      first_name,
      second_name,
      city,
      uf,
      cep,
      address,
      number,
      complement,
    });

    return response.json(classToClass(user));
  }
}

export default ProfileController;
