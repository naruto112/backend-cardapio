import { getRepository, Repository } from "typeorm";

import UsersToken from "../entities/UsersToken";

class UsersTokensRepository {
  private ormRepository: Repository<UsersToken>;

  constructor() {
    this.ormRepository = getRepository(UsersToken);
  }

  public async findBytoken(token: string): Promise<UsersToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: { token },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UsersToken> {
    const userToken = this.ormRepository.create({
      user_id,
    });

    await this.ormRepository.save(userToken);

    return userToken;
  }
}

export default UsersTokensRepository;
