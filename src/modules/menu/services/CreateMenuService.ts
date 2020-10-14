import MenuRepository from "../repositories/MenuRepository";
import AppError from "../../../errors/AppError";

import Menu from "../entities/Menu";

interface IRequest {
  owner: string;
  name: string;
  sequence?: number;
  visible: number;
}

class CreateMenuService {
  public async execute({ owner, name, visible }: IRequest): Promise<Menu[]> {
    const menuRepository = new MenuRepository();

    if (!owner) {
      throw (new AppError("Owner mandatory"), 401);
    }

    const { sequence } = await menuRepository.executeSequence();

    const menuCreate = await menuRepository.create({
      owner,
      name,
      sequence: !sequence ? 0 : sequence,
      visible,
    });

    const menu = await menuRepository.findByProduct(menuCreate.id);

    return menu;
  }
}

export default CreateMenuService;
