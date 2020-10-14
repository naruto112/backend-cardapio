import ProductsRepository from "../repositories/ProductsRepository";
import AppError from "../../../errors/AppError";

import Products from "../entities/Product";

interface IAditionals {
  id: string;
}

interface IRequest {
  id?: string;
  owner: string;
  name: string;
  price: number;
  description: string;
  stock?: number;
  visible: number;
  menu_id: string;
  category_id: string;
  aditionals: IAditionals[];
}

class CreateProductsService {
  public async create({
    owner,
    name,
    price,
    description,
    stock,
    visible,
    menu_id,
    category_id,
    aditionals,
  }: IRequest): Promise<Products> {
    const productRepository = new ProductsRepository();

    if (!owner) {
      throw new AppError("Owner mandatory", 401);
    }

    if (!aditionals) {
      throw new AppError("Aditionals mandatory", 401);
    }

    const product = productRepository.create({
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

    return product;
  }
}

export default CreateProductsService;
