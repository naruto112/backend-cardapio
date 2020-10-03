import Menu from "../entities/Menu";

import MenuRepository from "../repositories/MenuRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
  name: string;
  sequence: number;
  visible: number;
}

class ChangeSequenceMenuService {
  public async execute(sequence: IRequest): Promise<Menu> {
    const menuRepository = new MenuRepository();

    const menu = await menuRepository.save(sequence);

    return menu;
  }
}

export default ChangeSequenceMenuService;
