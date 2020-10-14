import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../config/upload";

import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";
import ProductsController from "../controllers/ProductsController";
import UploadFileProductController from "../controllers/UploadFileProductController";

const productsRouter = Router();
const upload = multer(uploadConfig);
const productsController = new ProductsController();
const uploadFileProductController = new UploadFileProductController();

productsRouter.use(ensureAuthenticated);

productsRouter.post("/", productsController.create);
productsRouter.get("/", productsController.show);
productsRouter.get("/:id", productsController.getByMenu);
productsRouter.get("/id/:id", productsController.get);
productsRouter.patch(
  "/attachment",
  ensureAuthenticated,
  upload.single("file"),
  uploadFileProductController.create
);
productsRouter.put("/", productsController.update);
productsRouter.delete("/", productsController.delete);

export default productsRouter;
