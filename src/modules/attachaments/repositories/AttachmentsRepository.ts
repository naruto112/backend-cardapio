import { Repository, getRepository } from "typeorm";
import Attachments from "../entities/Attachments";

interface IAttachments {
  product_id?: string;
  category_id?: string;
  url: string;
}

class AttachmentsRepository {
  private ormRepository: Repository<Attachments>;

  constructor() {
    this.ormRepository = getRepository(Attachments);
  }

  public async create(attachmentData: IAttachments): Promise<Attachments> {
    const attachment = this.ormRepository.create(attachmentData);

    await this.ormRepository.save(attachment);

    return attachment;
  }

  public async delete(id: string) {
    return this.ormRepository.delete(id);
  }
}
export default AttachmentsRepository;
