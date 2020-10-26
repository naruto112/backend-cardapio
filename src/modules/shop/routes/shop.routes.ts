import { Router } from "express";
import ShopController from "../controllers/ShopController";

const shopController = new ShopController();

const profileRouter = Router();
profileRouter.get("/categories/:name", shopController.showCategories);
profileRouter.get("/menu/:name", shopController.showMenu);
profileRouter.post("/products", shopController.showProducts);
profileRouter.get("/:name", shopController.showShop);

export default profileRouter;
