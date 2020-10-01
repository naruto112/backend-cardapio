import MenuRepository from "../repositories/MenuRepository";
import AppError from "../../../errors/AppError";

import Menu from "../entities/Menu";

interface IRequest {
  owner: string;
  name: string;
  sequence: number;
  visible: number;
}

class CreateMenuService {
  public async execute({
    owner,
    name,
    sequence,
    visible,
  }: IRequest): Promise<Menu> {
    const menuRepository = new MenuRepository();

    if (!owner) {
      throw (new AppError("Owner queried"), 401);
    }

    const menu = await menuRepository.create({
      owner,
      name,
      sequence,
      visible,
    });

    return menu;
  }
}

export default CreateMenuService;
