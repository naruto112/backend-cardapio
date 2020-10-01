import MenuRepository from "../repositories/MenuRepository";
import AppError from "../../../errors/AppError";

import Menu from "../entities/Menu";

interface IRequest {
  owner: string;
}

class ShowMenuService {
  public async execute({ owner }: IRequest): Promise<Menu[]> {
    const menuRepository = new MenuRepository();

    const menu = await menuRepository.findByOwner(owner);

    return menu;
  }
}

export default ShowMenuService;
