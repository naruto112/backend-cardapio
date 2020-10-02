import { Repository, getRepository } from "typeorm";
import Category from "../entities/Category";

interface ICategory {
  id?: string;
  owner: string;
  name: string;
}

class CategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create(productData: ICategory): Promise<Category> {
    const product = this.ormRepository.create(productData);

    await this.ormRepository.save(product);

    return product;
  }

  public async findByOwner(owner: string): Promise<Category[]> {
    const menus = await this.ormRepository.find({
      where: { owner },
    });
    return menus;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const menu = this.ormRepository.findOne(id);
    return menu;
  }

  public async save(menuData: ICategory): Promise<Category> {
    return this.ormRepository.save(menuData);
  }
}

export default CategoriesRepository;
