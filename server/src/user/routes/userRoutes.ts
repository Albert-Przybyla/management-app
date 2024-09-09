import { Router } from "express";
import { authMiddleware, checkRoles } from "../../middlewares/auth";
import { UserRole } from "../../shared/enums/userRole.enum";
import resourceRouter from "./resource.router";

const userBaseRouter = Router();

userBaseRouter.use(authMiddleware);
// userBaseRouter.use(checkRoles([UserRole.Manager, UserRole.Owner, UserRole.User]));

userBaseRouter.use("/resource", resourceRouter);

export default userBaseRouter;
