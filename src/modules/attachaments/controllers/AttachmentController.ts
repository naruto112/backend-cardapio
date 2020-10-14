import { Request, Response } from "express";
import DeleteAttachmentService from "../services/DeleteAttachmentService";


export default class AttachmentController {
    public async delete(request: Request, response: Response): Promise<Response> {
        const deleteAttachmentService = new DeleteAttachmentService();
        const { id } = request.body;

        const attachmentDeleted = await deleteAttachmentService.execute({
            id
        });

        return response.json(attachmentDeleted);
    }
}