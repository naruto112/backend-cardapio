import Category from "../entities/Category";

import CategoriesRepository from "../repositories/CategoriesRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
  name: string;
}

class UpdateCategoriesService {
  public async execute({ id, name }: IRequest): Promise<Category> {
    const categoryRepository = new CategoriesRepository();

    const category = await categoryRepository.findById(id);

    if (!category) {
      throw new AppError("Category not found", 401);
    }

    category.name = name;

    return await categoryRepository.save(category);
  }
}

export default UpdateCategoriesService;
