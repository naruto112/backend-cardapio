import ShopRepository from "../repositories/ShopRepository";

interface IRequest {
  name: string;
}

class ShowCategoriesService {
  public async execute({ name }: IRequest) {
    const shopRepository = new ShopRepository();
    return await shopRepository.findByCategories(name);
  }
}

export default ShowCategoriesService;
