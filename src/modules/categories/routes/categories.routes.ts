import { Router } from "express";

import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";
import CategoryController from "../controllers/CategoryController";

const categoriesRouter = Router();
const categoriesController = new CategoryController();

categoriesRouter.use(ensureAuthenticated);

categoriesRouter.post("/", categoriesController.create);
categoriesRouter.get("/", categoriesController.show);
categoriesRouter.put("/", categoriesController.update);

export default categoriesRouter;
