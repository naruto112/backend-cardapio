import ShopRepository from "../repositories/ShopRepository";

interface IRequest {
  name: string;
}

class ShowShopService {
  public async execute({ name }: IRequest) {
    const shopRepository = new ShopRepository();
    return shopRepository.findByShop(name);
  }
}
export default ShowShopService;
