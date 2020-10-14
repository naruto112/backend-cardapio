import ProductsRepository from "../repositories/ProductsRepository";
import AppError from "../../../errors/AppError";

import Products from "../entities/Product";

interface IRequest {
  id: string;
}

class GetByMenuProductService {
  public async execute({ id }: IRequest): Promise<Products[] | undefined> {
    const productRepository = new ProductsRepository();

    if (!id) {
      throw (new AppError("Product ID mandatory"), 401);
    }

    const product = await productRepository.findByIdMenu(id);

    return product;
  }
}

export default GetByMenuProductService;
