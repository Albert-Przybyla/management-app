import {
  changeResourcePrice,
  changeResourceQuantity,
  createResource,
} from "../controllers/userResourceController";
import { Router } from "express";

const resourceRouter = Router();

resourceRouter.post("", createResource);
resourceRouter.patch("/:resourceId/price", changeResourcePrice);
resourceRouter.patch("/:resourceId/quantity", changeResourceQuantity);
export default resourceRouter;
