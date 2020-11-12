import { Request, Response } from "express";
import ShowCategoriesService from "../services/ShowCategoriesService";
import ShowMenuService from "../services/ShowMenuService";
import ShowProductsService from "../services/ShowProductsService";
import ShowShopService from "../services/ShowShopService";
import ShowFilterCategoryService from "../services/ShowFilterCategoryService";
import { classToClass } from "class-transformer";

export default class ShopController {
  public async showShop(request: Request, response: Response) {
    const showShopService = new ShowShopService();
    const { name } = request.params;
    const shop = await showShopService.execute({ name });
    return response.json(classToClass(shop));
  }

  public async showMenu(
    request: Request,
    response: Response
  ): Promise<Response> {
    const showMenuService = new ShowMenuService();
    const { name } = request.params;
    const menu = await showMenuService.execute({ name });
    return response.json(classToClass(menu));
  }

  public async showCategories(
    request: Request,
    response: Response
  ): Promise<Response> {
    const showCategoriesService = new ShowCategoriesService();
    const { name } = request.params;
    const categories = await showCategoriesService.execute({ name });
    return response.json(categories);
  }

  public async showMenuFilterCategory(
    request: Request,
    response: Response
  ): Promise<Response> {
    const showFilterCategoryService = new ShowFilterCategoryService();
    const { name } = request.params;
    const { category_id } = request.body;
    const products = await showFilterCategoryService.execute({
      name,
      category_id,
    });
    return response.json(classToClass(products));
  }

  public async showProducts(request: Request, response: Response) {
    const showProductsService = new ShowProductsService();
    const { id } = request.body;
    const [products] = await showProductsService.execute({ id });
    return response.json(classToClass(products));
  }
}
