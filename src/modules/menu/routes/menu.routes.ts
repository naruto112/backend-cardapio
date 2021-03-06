import { Router } from "express";

import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";
import MenuController from "../controllers/MenuController";

const menuRouter = Router();
const menuController = new MenuController();

menuRouter.use(ensureAuthenticated);

menuRouter.get("/", menuController.show);
menuRouter.get("/:id", menuController.params);
menuRouter.post("/", menuController.create);
menuRouter.put("/", menuController.update);
menuRouter.put("/sequence", menuController.sequence);
menuRouter.delete("/:id", menuController.delete);

export default menuRouter;
