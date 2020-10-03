import { Request, Response } from "express";
import CreateProductsService from "../services/CreateProductsService";
import ShowProductsService from "../services/ShowProductsService";
import UpdateProductsService from "../services/UpdateProductsService";
import DisabledProductsService from "../services/DisabledProductsService";

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createProductService = new CreateProductsService();
    const owner = request.user.id;
    const {
      name,
      price,
      description,
      stock,
      visible,
      menu_id,
      category_id,
      aditional_id,
    } = request.body;

    const product = await createProductService.create({
      owner,
      name,
      price,
      description,
      stock,
      visible,
      menu_id,
      category_id,
      aditional_id,
    });

    return response.json(product);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const owner = request.user.id;

    const showProductService = new ShowProductsService();
    const product = await showProductService.execute({ owner });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateProductService = new UpdateProductsService();
    const { id, name, price, description, stock, visible } = request.body;

    const product = await updateProductService.execute({
      id,
      name,
      price,
      description,
      stock,
      visible,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const disabledProductService = new DisabledProductsService();
    const { id } = request.body;

    const product = await disabledProductService.execute({
      id,
    });

    return response.json(product);
  }
}
