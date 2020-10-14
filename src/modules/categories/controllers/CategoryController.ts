import { Request, Response } from "express";
import CreateCategoriesService from "../services/CreateCategoriesService";
import ShowCategoriesService from "../services/ShowCategoriesService";
import UpdateCategoriesService from "../services/UpdateCategoriesService";
import { classToClass } from "class-transformer";

export default class CategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createCategory = new CreateCategoriesService();
    const owner = request.user.id;

    const { name } = request.body;

    const category = await createCategory.create({
      owner,
      name,
    });

    return response.json(category);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const owner = request.user.id;

    const showCategoryService = new ShowCategoriesService();

    const category = await showCategoryService.execute({
      owner,
    });

    return response.json(classToClass(category));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateCategoryService = new UpdateCategoriesService();
    const { id, name } = request.body;

    const category = await updateCategoryService.execute({
      id,
      name,
    });

    return response.json(category);
  }
}
