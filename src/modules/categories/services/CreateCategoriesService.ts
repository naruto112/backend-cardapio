import CategoriesRepository from "../repositories/CategoriesRepository";
import AppError from "../../../errors/AppError";

import Category from "../entities/Category";

interface IRequest {
  id?: string;
  owner: string;
  name: string;
}

class CreateCategoriesService {
  public async create({ owner, name }: IRequest): Promise<Category> {
    const categoriesRepository = new CategoriesRepository();

    if (!owner) {
      throw new AppError("Owner mandatory", 401);
    }

    const category = categoriesRepository.create({
      owner,
      name,
    });

    return category;
  }
}

export default CreateCategoriesService;
