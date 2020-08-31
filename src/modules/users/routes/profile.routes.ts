import { Router } from "express";

import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";
import ProfileController from "../controllers/ProfileController";

const profileRouter = Router();
const profilController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get("/", profilController.show);
profileRouter.put("/", profilController.update);

export default profileRouter;
