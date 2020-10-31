import Menu from "../entities/Menu";

import MenuRepository from "../repositories/MenuRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
}

class DisabledMenuService {
  public async execute({ id }: IRequest): Promise<boolean> {
    const menuRepository = new MenuRepository();

    if (!id) {
      throw new AppError("ID Menu required", 401);
    }

    return await menuRepository.delete(id);
  }
}

export default DisabledMenuService;
