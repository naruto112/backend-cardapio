import { Router } from "express";
import AttachmentController from "../controllers/AttachmentController";

import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";

const attachmentsRouter = Router();
const attachmentController = new AttachmentController();

attachmentsRouter.use(ensureAuthenticated);
attachmentsRouter.post("/", attachmentController.delete);

export default attachmentsRouter;
