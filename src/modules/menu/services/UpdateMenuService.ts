import Menu from "../entities/Menu";

import MenuRepository from "../repositories/MenuRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
  name: string;
  sequence: number;
  visible: number;
}

class UpdateMenuService {
  public async execute({
    id,
    name,
    sequence,
    visible,
  }: IRequest): Promise<Menu> {
    const menuRepository = new MenuRepository();

    const menu = await menuRepository.findById(id);

    if (!menu) {
      throw new AppError("Menu not found", 401);
    }

    return await menuRepository.save({
      id,
      name,
      sequence,
      visible,
    });
  }
}

export default UpdateMenuService;
