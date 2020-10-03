import ProductsRepository from "../repositories/ProductsRepository";
import AppError from "../../../errors/AppError";

import Products from "../entities/Product";

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
  aditional_id: string;
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
    aditional_id,
  }: IRequest): Promise<Products> {
    const productRepository = new ProductsRepository();

    if (!owner) {
      throw new AppError("Owner mandatory", 401);
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
      aditional_id,
    });

    return product;
  }
}

export default CreateProductsService;
