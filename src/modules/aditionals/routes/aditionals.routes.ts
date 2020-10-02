import { Router } from "express";

import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";
import AditionalController from "../controllers/AditionalController";

const aditionalsRouter = Router();
const aditionalsController = new AditionalController();

aditionalsRouter.use(ensureAuthenticated);

aditionalsRouter.post("/", aditionalsController.create);
aditionalsRouter.get("/", aditionalsController.show);
aditionalsRouter.put("/", aditionalsController.update);

export default aditionalsRouter;
