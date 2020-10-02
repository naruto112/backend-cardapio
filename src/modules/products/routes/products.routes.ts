import { Router } from "express";

import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";
import ProductsController from "../controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.use(ensureAuthenticated);

productsRouter.post("/", productsController.create);
productsRouter.get("/", productsController.show);
productsRouter.put("/", productsController.update);
productsRouter.delete("/", productsController.delete);

export default productsRouter;
