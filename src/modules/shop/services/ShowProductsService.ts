import ShopRepository from "../repositories/ShopRepository";

interface IRequest {
  id: string;
}

class ShowProductsService {
  public async execute({ id }: IRequest) {
    const shopRepository = new ShopRepository();
    return await shopRepository.finByProducts(id);
  }
}

export default ShowProductsService;
