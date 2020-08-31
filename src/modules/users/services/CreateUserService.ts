import UsersRepository from "../repositories/UsersRepository";
import AppError from "../../../errors/AppError";
import BCryptHashProvider from "../providers/BCryptHashProvider";

import Users from "../entities/Users";

interface IRequest {
  email: string;
  password: string;
  first_name: string;
  second_name: string;
  phone: string;
  city: string;
  uf: string;
  cep: string;
  address: string;
  neighborhood: string;
  number: string;
  complement: string;
}

class CreateUserService {
  public async execute({
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
  }: IRequest): Promise<Users> {
    const userRepository = new UsersRepository();
    const hashProvider = new BCryptHashProvider();

    const checkUserExists = await userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError("Email address already used", 401);
    }

    const hashedPassword = await hashProvider.generateHash(password);

    const user = await userRepository.create({
      email,
      password: hashedPassword,
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
    });

    return user;
  }
}

export default CreateUserService;
