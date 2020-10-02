import { Repository, getRepository } from "typeorm";
import Users from "../entities/User";

interface ICreateUser {
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

class UsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async findById(id: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });
    return user;
  }

  public async create(userData: ICreateUser): Promise<Users> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: Users): Promise<Users> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
