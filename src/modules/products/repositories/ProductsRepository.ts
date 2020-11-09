import { Repository, getRepository } from "typeorm";
import Products from "../entities/Product";

interface IAditionals {
  id: string;
}

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
  aditionals: IAditionals[];
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
      relations: ["attachment"],
    });
    return menus;
  }

  public async findById(id: string): Promise<Products | undefined> {
    const product = this.ormRepository.findOne({
      where: { id },
      relations: ["category", "aditionals", "attachment"],
    });
    return product;
  }

  public async findByIdMenu(id: string): Promise<Products[] | undefined> {
    const product = this.ormRepository.find({
      where: { menu_id: id },
      relations: ["category", "aditionals", "attachment"],
    });
    return product;
  }

  public async save(productData: IProducts): Promise<Products> {
    const product = await this.ormRepository.save(productData);
    return product;
  }
}

export default ProductsRepository;
