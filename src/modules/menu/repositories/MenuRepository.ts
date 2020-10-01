import { Repository, getRepository } from "typeorm";
import Menu from "../entities/Menu";

interface ICreateMenu {
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

  public async create(menuData: ICreateMenu): Promise<Menu> {
    const menu = this.ormRepository.create(menuData);

    await this.ormRepository.save(menu);

    return menu;
  }

  public async findByOwner(owner: string): Promise<Menu[]> {
    const menus = await this.ormRepository.find({
      where: { owner },
    });
    return menus;
  }

  public async findById(id: string): Promise<Menu | undefined> {
    const menu = this.ormRepository.findOne(id);
    return menu;
  }

  public async save(menuData: ICreateMenu): Promise<Menu> {
    return this.ormRepository.save(menuData);
  }
}

export default MenuRepository;
