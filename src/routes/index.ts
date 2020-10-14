import { Router } from "express";

import usersRouter from "../modules/users/routes/users.routes";
import sessionRouter from "../modules/users/routes/session.routes";
import passwordRouter from "../modules/users/routes/password.routes";
import profileRouter from "../modules/users/routes/profile.routes";
import menuRouter from "../modules/menu/routes/menu.routes";
import productsRouter from "../modules/products/routes/products.routes";
import categoriesRouter from "../modules/categories/routes/categories.routes";
import aditionalsRouter from "../modules/aditionals/routes/aditionals.routes";
import attachmentsRouter from "../modules/attachaments/routes/attachments.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionRouter);
routes.use("/password", passwordRouter);
routes.use("/profile", profileRouter);
routes.use("/menu", menuRouter);
routes.use("/products", productsRouter);
routes.use("/categories", categoriesRouter);
routes.use("/aditionals", aditionalsRouter);
routes.use("/attachments", attachmentsRouter);

export default routes;
