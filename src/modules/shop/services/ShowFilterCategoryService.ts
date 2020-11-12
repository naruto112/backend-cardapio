import ShopRepository from "../repositories/ShopRepository";

interface IRequest {
  name: string;
  category_id: string;
}

class ShowFilterCategoryService {
  public async execute({ name, category_id }: IRequest) {
    const shopRepository = new ShopRepository();
    return await shopRepository.finByMenuFilterCategory(name, category_id);
  }
}

export default ShowFilterCategoryService;
