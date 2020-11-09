import Products from "../entities/Product";

import ProductsRepository from "../repositories/ProductsRepository";
import AppError from "../../../errors/AppError";
import CategoriesRepository from "../../categories/repositories/CategoriesRepository";

interface IAditionals {
  id: string;
  owner: string;
  name: string;
  quantity: number;
  price: number;
  created_at: Date;
  updated_at: Date;
}

interface IRequest {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  visible: number;
  category_id: string;
  aditionals: IAditionals[];
}

class UpdateProductsService {
  public async execute({
    id,
    name,
    price,
    description,
    stock,
    visible,
    category_id,
    aditionals,
  }: IRequest): Promise<Products> {
    const productsRepository = new ProductsRepository();
    const categoriesRepository = new CategoriesRepository();

    const product = await productsRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found", 401);
    }

    const category  = await categoriesRepository.findById(category_id);

    if (!category) {
      throw new AppError("Product not found", 401);
    }

    product.name = name;
    product.price = price;
    product.description = description;
    product.stock = stock;
    product.visible = visible;
    product.category_id = category_id;
    product.aditionals = aditionals;
    product.category = category;

    return await productsRepository.save(product);
  }
}

export default UpdateProductsService;
