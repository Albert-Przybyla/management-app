import { Router } from "express";
import { login } from "../controllers/authController";

const publicBaseRouter = Router();

publicBaseRouter.post("/login", login);

export default publicBaseRouter;
