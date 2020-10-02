import AditionalsRepository from "../repositories/AditionalsRepository";
import AppError from "../../../errors/AppError";

import Aditional from "../entities/Aditional";

interface IRequest {
  owner: string;
}

class ShowAditionalsService {
  public async execute({ owner }: IRequest): Promise<Aditional[]> {
    const aditionalRepository = new AditionalsRepository();

    if (!owner) {
      throw (new AppError("Owner mandatory"), 401);
    }

    const aditional = await aditionalRepository.findByOwner(owner);

    return aditional;
  }
}

export default ShowAditionalsService;
