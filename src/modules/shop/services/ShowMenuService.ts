import ShopRepository from "../repositories/ShopRepository";

interface IRequest {
  name: string;
}

class ShowMenuService {
  public async execute({ name }: IRequest) {
    const shopRepository = new ShopRepository();
    return await shopRepository.findByMenu(name);
  }
}

export default ShowMenuService;
