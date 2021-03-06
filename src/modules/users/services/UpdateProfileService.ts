import Users from "../entities/User";
import UsersRepository from "../repositories/UsersRepository";
import BCryptHashprovider from "../providers/BCryptHashProvider";
import AppError from "../../../errors/AppError";

interface IRequest {
  user_id: string;
  email: string;
  password?: string;
  old_password?: string;
  first_name: string;
  phone: string;
  second_name: string;
  city: string;
  uf: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  shop: string;
  fantasy_name: string;
}

class UpdateProfileService {
  public async execute({
    user_id,
    email,
    password,
    old_password,
    first_name,
    second_name,
    phone,
    city,
    uf,
    cep,
    address,
    number,
    complement,
    shop,
    fantasy_name,
  }: IRequest): Promise<Users> {
    const usersRepository = new UsersRepository();
    const hashProvider = new BCryptHashprovider();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found", 401);
    }

    const userWithUpdatEmail = await usersRepository.findByEmail(email);

    if (userWithUpdatEmail && userWithUpdatEmail.id !== user_id) {
      throw new AppError("E-mail already in use");
    }

    user.email = email;
    user.first_name = first_name;
    user.second_name = second_name;
    user.phone = phone;
    user.city = city;
    user.uf = uf;
    user.cep = cep;
    user.address = address;
    user.number = number;
    user.complement = complement;
    user.shop = shop;
    user.fantasy_name = fantasy_name;

    if (password && old_password) {
      const checkOldPassword = await hashProvider.compareHash(
        old_password,
        user.password
      );

      if (!checkOldPassword) {
        throw new AppError("Old password does not match.");
      }

      user.password = await hashProvider.generateHash(password);
    }

    return usersRepository.save(user);
  }
}

export default UpdateProfileService;
