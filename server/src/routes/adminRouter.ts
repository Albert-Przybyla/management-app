import { Router } from "express";
import userRouter from "./admins/user.router";
import organizationRouter from "./admins/organization.router";

const adminBaseRouter = Router();

adminBaseRouter.get("/", (req, res) => {
  res.send("Admin Home");
});

adminBaseRouter.use("/user", userRouter);
adminBaseRouter.use("/organization", organizationRouter);

export default adminBaseRouter;
