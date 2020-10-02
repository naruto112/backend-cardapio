import CategoriesRepository from "../repositories/CategoriesRepository";
import AppError from "../../../errors/AppError";

import Category from "../entities/Category";

interface IRequest {
  owner: string;
}

class ShowCategoriesService {
  public async execute({ owner }: IRequest): Promise<Category[]> {
    const categoryRepository = new CategoriesRepository();

    if (!owner) {
      throw (new AppError("Owner mandatory"), 401);
    }

    const category = await categoryRepository.findByOwner(owner);

    return category;
  }
}

export default ShowCategoriesService;
