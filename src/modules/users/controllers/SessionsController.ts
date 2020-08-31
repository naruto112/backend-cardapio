import { Request, Response } from "express";
import { classToClass } from "class-transformer";

import AuthenticateUserService from "../services/AuthenticateUserService";

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}

export default SessionController;
