import { Repository, getRepository } from "typeorm";
import Users from "../../users/entities/User";
import Menu from "../../menu/entities/Menu";
import Product from "../../products/entities/Product";
import Products from "../../products/entities/Product";

class ShopRepository {
  private ormRepositoryUser: Repository<Users>;
  private ormRepositoryMenu: Repository<Menu>;
  private ormRepositoryProduct: Repository<Product>;

  constructor() {
    this.ormRepositoryUser = getRepository(Users);
    this.ormRepositoryMenu = getRepository(Menu);
    this.ormRepositoryProduct = getRepository(Product);
  }

  public async findByShop(name: string): Promise<Users | undefined> {
    const shop = await this.ormRepositoryUser.findOne({
      where: { shop: name },
    });

    return shop;
  }

  public async finByMenuFilterCategory(
    name: string,
    category_id: string
  ): Promise<Products[]> {
    const [{ id }] = await this.ormRepositoryUser.find({
      where: { shop: name },
    });

    const products = await this.ormRepositoryProduct.find({
      relations: ["attachment"],
      where: {
        owner: id,
        category_id,
      },
    });

    return products;
  }

  public async findByMenu(name: string): Promise<Menu[]> {
    const [{ id }] = await this.ormRepositoryUser.find({
      where: { shop: name },
    });

    const menu = await this.ormRepositoryMenu.find({
      relations: ["products", "products.attachment"],
      where: { owner: id, visible: 1 },
      order: { sequence: "ASC" },
    });

    return menu;
  }

  public async findByCategories(name: string): Promise<Users[]> {
    const categories = await this.ormRepositoryUser.query(
      `SELECT 
       categories.id,
       name,
       concat('${process.env.APP_STORAGE_URL}/files/', url) as url 
       FROM users
       JOIN categories on users.id = categories.owner
       LEFT JOIN attachments on categories.id = attachments.category_id
       WHERE shop = '${name}'`
    );

    return categories;
  }

  public async finByProducts(id: string) {
    const product = await this.ormRepositoryProduct.find({
      relations: ["aditionals", "attachment"],
      where: { id },
    });

    return product;
  }
}

export default ShopRepository;
