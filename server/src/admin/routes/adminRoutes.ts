import { Router } from "express";
import userRouter from "./user.router";
import organizationRouter from "./organization.router";
import { isAdmin } from "../../middlewares/auth";

const adminBaseRouter = Router();

adminBaseRouter.use(isAdmin);

adminBaseRouter.use("/user", userRouter);
adminBaseRouter.use("/organization", organizationRouter);

export default adminBaseRouter;
