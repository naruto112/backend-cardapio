import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../config/upload";

import UsersController from "../controllers/UsersController";
import UsersControllerAvatar from "../controllers/UsersAvatarController";
import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const usersControllerAvatar = new UsersControllerAvatar();

usersRouter.post("/", usersController.create);
usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  usersControllerAvatar.update
);

export default usersRouter;
