import Aditional from "../entities/Aditional";

import AditionalsRepository from "../repositories/AditionalsRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

class UpdateAditionalsService {
  public async execute({
    id,
    name,
    quantity,
    price,
  }: IRequest): Promise<Aditional> {
    const aditionalRepository = new AditionalsRepository();

    const aditional = await aditionalRepository.findById(id);

    if (!aditional) {
      throw new AppError("Aditional not found", 401);
    }

    aditional.name = name;
    aditional.quantity = quantity;
    aditional.price = price;

    return await aditionalRepository.save(aditional);
  }
}

export default UpdateAditionalsService;
