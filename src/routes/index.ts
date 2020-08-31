import { Router } from "express";

import usersRouter from "../modules/users/routes/users.routes";
import sessionRouter from "../modules/users/routes/session.routes";
import passwordRouter from "../modules/users/routes/password.routes";
import profileRouter from "../modules/users/routes/profile.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter);
routes.use("/password", passwordRouter);
routes.use("/profile", profileRouter);

export default routes;
