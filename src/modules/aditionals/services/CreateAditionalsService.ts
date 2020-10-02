import AditionalsRepository from "../repositories/AditionalsRepository";
import AppError from "../../../errors/AppError";

import Aditional from "../entities/Aditional";

interface IRequest {
  id?: string;
  owner: string;
  name: string;
  quantity: number;
  price: number;
}

class CreateAditionalsService {
  public async create({
    owner,
    name,
    quantity,
    price,
  }: IRequest): Promise<Aditional> {
    const aditionalsRepository = new AditionalsRepository();

    if (!owner) {
      throw new AppError("Owner mandatory", 401);
    }

    const aditional = aditionalsRepository.create({
      owner,
      name,
      quantity,
      price,
    });

    return aditional;
  }
}

export default CreateAditionalsService;
