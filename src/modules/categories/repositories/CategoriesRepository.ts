import { Repository, getRepository, DeleteResult } from "typeorm";
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
      relations: ["attachment"],
    });
    return menus;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const menu = this.ormRepository.findOne(id);
    return menu;
  }

  public async delete(id: string): Promise<DeleteResult> {
    const categoryDelete = this.ormRepository.delete(id);
    return categoryDelete;
  }

  public async save(categoryData: ICategory): Promise<Category> {
    return this.ormRepository.save(categoryData);
  }
}

export default CategoriesRepository;
