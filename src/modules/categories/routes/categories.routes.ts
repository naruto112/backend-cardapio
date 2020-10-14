import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../config/upload";
import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";
import CategoryController from "../controllers/CategoryController";
import UploadFileCategoryController from "../controllers/UploadFileCategoryController";

const categoriesRouter = Router();
const upload = multer(uploadConfig);
const uploadFileCategoryController = new UploadFileCategoryController();
const categoriesController = new CategoryController();

categoriesRouter.use(ensureAuthenticated);

categoriesRouter.post("/", categoriesController.create);
categoriesRouter.patch(
  "/attachment",
  ensureAuthenticated,
  upload.single("file"),
  uploadFileCategoryController.create
);
categoriesRouter.get("/", categoriesController.show);
categoriesRouter.put("/", categoriesController.update);

export default categoriesRouter;
