import Menu from "../entities/Menu";

import MenuRepository from "../repositories/MenuRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
}

class DisabledMenuService {
  public async execute({ id }: IRequest): Promise<Menu> {
    const menuRepository = new MenuRepository();

    const menu = await menuRepository.findById(id);

    if (!menu) {
      throw new AppError("Menu not found", 401);
    }

    menu.visible = 0;

    return await menuRepository.save(menu);
  }
}

export default DisabledMenuService;
