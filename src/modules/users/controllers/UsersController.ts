import { Request, Response } from "express";
import { classToClass } from "class-transformer";

import CreateUserService from "../services/CreateUserService";
import SendNewUsersEmailService from "../services/SendNewUsersEmailService";

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUserService = new CreateUserService();
    const sendNewUserEmailService = new SendNewUsersEmailService();

    const {
      email,
      password,
      first_name,
      second_name,
      phone,
      city,
      uf,
      cep,
      address,
      neighborhood,
      number,
      complement,
      term,
    } = request.body;

    const user = await createUserService.execute({
      email,
      password,
      first_name,
      second_name,
      phone,
      city,
      uf,
      cep,
      address,
      neighborhood,
      number,
      complement,
      term
    });

    await sendNewUserEmailService.sendMail({
      email,
    });

    return response.json(classToClass(user));
  }
}
