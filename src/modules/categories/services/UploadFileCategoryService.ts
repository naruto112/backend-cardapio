import Attachments from "../../attachaments/entities/Attachments";
import Attachaments from "../../attachaments/entities/Attachments";
import CategoriesRepository from "../repositories/CategoriesRepository";
import AttachmentsRepository from "../../attachaments/repositories/AttachmentsRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
  id: string;
  url: string;
}

class UploadFileCategoryService {
  public async execute({ id, url }: IRequest): Promise<Attachaments> {
    const categoriesRepository = new CategoriesRepository();
    const attachmentsRepository = new AttachmentsRepository();

    const categories = await categoriesRepository.findById(id);

    if (!categories) {
      throw new AppError("Category not found", 401);
    }

    const attachment = await attachmentsRepository.create({
      category_id: id,
      url,
    });

    return attachment;
  }
}

export default UploadFileCategoryService;
