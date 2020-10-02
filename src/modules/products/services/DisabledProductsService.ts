import Products from "../entities/Product";

import ProductsRepository from "../repositories/ProductsRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
}

class DisabledMenuService {
  public async execute({ id }: IRequest): Promise<Products> {
    const productRepository = new ProductsRepository();

    const product = await productRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found", 401);
    }

    product.visible = 0;

    return await productRepository.save(product);
  }
}

export default DisabledMenuService;
