import AttachmentsRepository from "../repositories/AttachmentsRepository";
import AppError from "../../../errors/AppError";

interface IRequest {
    id: string;
}


class DeleteAttachmentService {
    public async execute({ id }: IRequest): Promise<boolean>{
        const attachmentsRepository = new AttachmentsRepository();

        if (!id) {
            throw new AppError("Attachment ID mandatory", 401);
        }

        await attachmentsRepository.delete(id);

        return true;
    }
}

export default DeleteAttachmentService;