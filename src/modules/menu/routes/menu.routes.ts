import { Router } from "express";

import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";
import MenuController from "../controllers/MenuController";

const menuRouter = Router();
const menuController = new MenuController();

menuRouter.use(ensureAuthenticated);

menuRouter.get("/", menuController.show);
menuRouter.post("/", menuController.create);
menuRouter.put("/", menuController.update);
menuRouter.put("/sequence", menuController.sequence);
menuRouter.delete("/", menuController.delete);

export default menuRouter;
