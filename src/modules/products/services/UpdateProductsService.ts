import Products from "../entities/Product";

import ProductsRepository from "../repositories/ProductsRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  visible: number;
}

class UpdateProductsService {
  public async execute({
    id,
    name,
    price,
    description,
    stock,
    visible,
  }: IRequest): Promise<Products> {
    const productsRepository = new ProductsRepository();

    const product = await productsRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found", 401);
    }

    product.name = name;
    product.price = price;
    product.description = description;
    product.stock = stock;
    product.visible = visible;

    return await productsRepository.save(product);
  }
}

export default UpdateProductsService;
