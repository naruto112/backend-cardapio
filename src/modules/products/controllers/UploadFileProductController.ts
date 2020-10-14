import { Request, Response } from "express";
import UploadFileProductService from "../services/UploadFileProductService";
import { classToClass } from "class-transformer";

export default class UploadFileProductController {
  public async create(request: Request, response: Response) {
    const uploadFileProductService = new UploadFileProductService();
    const { id } = request.body;
    const fileName = request.file.filename;

    const attachment = await uploadFileProductService.execute({
      id,
      url: fileName,
    });

    return response.json(classToClass(attachment));
  }
}
