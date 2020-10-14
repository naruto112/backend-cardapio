import { Request, Response } from "express";
import UploadFileCategoryService from "../services/UploadFileCategoryService";
import { classToClass } from "class-transformer";

export default class UploadFileCategoryController {
  public async create(request: Request, response: Response) {
    const uploadFileCategoryService = new UploadFileCategoryService();
    const { id } = request.body;
    const fileName = request.file.filename;

    const category = await uploadFileCategoryService.execute({
      id,
      url: fileName,
    });

    return response.json(classToClass(category));
  }
}
