import { Request, Response } from "express";
import CreateMenuService from "../services/CreateMenuService";
import UpdateMenuService from "../services/UpdateMenuService";
import ShowMenuService from "../services/ShowMenuService";
import DisabledMenuService from "../services/DisabledMenuService";

export default class MenuController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createMenuService = new CreateMenuService();
    const owner = request.user.id;
    const { name, sequence, visible } = request.body;

    const menu = await createMenuService.execute({
      owner,
      name,
      sequence,
      visible,
    });

    return response.json(menu);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const owner = request.user.id;
    const showMenuService = new ShowMenuService();
    const menus = await showMenuService.execute({ owner });

    return response.json(menus);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateMenuService = new UpdateMenuService();
    const { id, name, sequence, visible } = request.body;

    const menu = await updateMenuService.execute({
      id,
      name,
      sequence,
      visible,
    });

    return response.json(menu);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const disabledMenuService = new DisabledMenuService();
    const { id } = request.body;

    const menu = await disabledMenuService.execute({
      id,
    });

    return response.json(menu);
  }
}
