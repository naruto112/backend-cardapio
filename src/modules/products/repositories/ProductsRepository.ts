import { Repository, getRepository } from "typeorm";
import Products from "../entities/Product";

interface IProducts {
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

class ProductsRepository {
  private ormRepository: Repository<Products>;

  constructor() {
    this.ormRepository = getRepository(Products);
  }

  public async create(productData: IProducts): Promise<Products> {
    const product = this.ormRepository.create(productData);

    await this.ormRepository.save(product);

    return product;
  }

  public async findByOwner(owner: string): Promise<Products[]> {
    const menus = await this.ormRepository.find({
      where: { owner },
    });
    return menus;
  }

  public async findById(id: string): Promise<Products | undefined> {
    const menu = this.ormRepository.findOne(id);
    return menu;
  }

  public async save(menuData: IProducts): Promise<Products> {
    return this.ormRepository.save(menuData);
  }
}

export default ProductsRepository;
