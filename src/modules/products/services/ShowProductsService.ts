import ProductsRepository from "../repositories/ProductsRepository";
import AppError from "../../../errors/AppError";

import Products from "../entities/Product";

interface IRequest {
  owner: string;
}

class ShowProductsService {
  public async execute({ owner }: IRequest): Promise<Products[]> {
    const productRepository = new ProductsRepository();

    if (!owner) {
      throw (new AppError("Owner mandatory"), 401);
    }

    const product = await productRepository.findByOwner(owner);

    return product;
  }
}

export default ShowProductsService;
