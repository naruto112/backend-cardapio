import Attachments from "../../attachaments/entities/Attachments";
import ProductsRepository from "../repositories/ProductsRepository";
import AttachmentsRepository from "../../attachaments/repositories/AttachmentsRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
  url: string;
}

class UploadFileProductService {
  public async execute({
    id,
    url,
  }: IRequest): Promise<Attachments> {
    const productRepository = new ProductsRepository();
    const attachmentRepository = new AttachmentsRepository();
    const product = productRepository.findById(id);

    if (!product) {
      throw new AppError("Product not found.", 401);
    }

    const attachment = await attachmentRepository.create({product_id: id, url});

    return attachment;
  }
}

export default UploadFileProductService;
