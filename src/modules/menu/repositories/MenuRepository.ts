import { Repository, getRepository } from "typeorm";
import Menu from "../entities/Menu";
import Product from "../../products/entities/Product";

interface IMenu {
  id?: string;
  owner?: string;
  name: string;
  sequence: number;
  visible: number;
}

class MenuRepository {
  private ormRepository: Repository<Menu>;

  constructor() {
    this.ormRepository = getRepository(Menu);
  }

  public async create(menuData: IMenu): Promise<Menu> {
    const menu = this.ormRepository.create(menuData);

    await this.ormRepository.save(menu);

    return menu;
  }

  public async executeSequence(): Promise<IMenu> {
    const sequence = await this.ormRepository
      .createQueryBuilder("menu")
      .select("max(sequence + 1)", "sequence")
      .getRawOne();

    return sequence;
  }

  public async findByOwner(owner: string): Promise<Menu[]> {
    const menus = await this.ormRepository.find({
      relations: ["products"],
      where: { owner },
      order: { sequence: "ASC" },
    });
    return menus;
  }

  public async findByProduct(id: string): Promise<Menu[]> {
    const menus = await this.ormRepository.find({
      relations: ["products"],
      where: { id },
      order: { sequence: "ASC" },
    });
    return menus;
  }

  public async findById(id: string): Promise<Menu | undefined> {
    const menu = this.ormRepository.findOne(id);
    return menu;
  }

  public async save(menuData: IMenu): Promise<Menu> {
    return this.ormRepository.save(menuData);
  }
}

export default MenuRepository;
