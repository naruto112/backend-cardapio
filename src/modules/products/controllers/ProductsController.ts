import { Request, Response } from "express";
import CreateProductsService from "../services/CreateProductsService";
import ShowProductsService from "../services/ShowProductsService";
import UpdateProductsService from "../services/UpdateProductsService";
import DisabledProductsService from "../services/DisabledProductsService";
import GetByMenuProductService from "../services/GetByMenuProductService";
import GetProductService from "../services/GetProductService";
import { classToClass } from "class-transformer";

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
      aditionals,
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
      aditionals,
    });

    return response.json(product);
  }

  public async show(
    request: Request,
    response: Response
  ): Promise<Response | undefined> {
    const owner = request.user.id;

    const showProductService = new ShowProductsService();
    const product = await showProductService.execute({ owner });

    return response.json(classToClass(product));
  }

  public async getByMenu(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const getProductService = new GetByMenuProductService();
    const product = await getProductService.execute({ id });

    return response.json(classToClass(product));
  }

  public async get(
    request: Request,
    response: Response
  ): Promise<Response | undefined> {
    const { id } = request.params;

    const getProductService = new GetProductService();

    const product = await getProductService.execute({ id });

    return response.json(classToClass(product));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateProductService = new UpdateProductsService();
    const {
      id,
      name,
      price,
      description,
      stock,
      visible,
      category_id,
      aditionals,
    } = request.body;

    const product = await updateProductService.execute({
      id,
      name,
      price,
      description,
      stock,
      visible,
      category_id,
      aditionals,
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
