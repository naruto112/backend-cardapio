import MenuRepository from "../repositories/MenuRepository";
import AppError from "../../../errors/AppError";

import Menu from "../entities/Menu";

interface IRequest {
  id: string;
}

class ParamsMenuService {
  public async execute({ id }: IRequest): Promise<Menu[]> {
    const menuRepository = new MenuRepository();

    const menu = await menuRepository.findByProduct(id);

    if (!menu) {
      throw new AppError("Menu not found", 401);
    }

    return menu;
  }
}

export default ParamsMenuService;
