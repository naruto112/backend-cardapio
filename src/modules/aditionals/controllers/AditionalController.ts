import { Request, Response } from "express";
import CreateAditionalsService from "../services/CreateAditionalsService";
import ShowAditionalsService from "../services/ShowAditionalsService";
import UpdateAditionalsService from "../services/UpdateAditionalsService";

export default class AditionalController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createAditional = new CreateAditionalsService();
    const owner = request.user.id;
    const { name, quantity, price } = request.body;

    const aditional = await createAditional.create({
      owner,
      name,
      quantity,
      price,
    });

    return response.json(aditional);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const owner = request.user.id;

    const showAditionalService = new ShowAditionalsService();

    const aditional = await showAditionalService.execute({
      owner,
    });

    return response.json(aditional);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateAditionalService = new UpdateAditionalsService();
    const { id, name, quantity, price } = request.body;

    const aditional = await updateAditionalService.execute({
      id,
      name,
      quantity,
      price,
    });

    return response.json(aditional);
  }
}
