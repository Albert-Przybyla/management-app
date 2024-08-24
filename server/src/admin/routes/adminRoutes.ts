import { Router } from "express";
import userRouter from "./user.router";
import organizationRouter from "./organization.router";

const adminBaseRouter = Router();

adminBaseRouter.get("/", (req, res) => {
  res.send("Admin Home");
});

adminBaseRouter.use("/user", userRouter);
adminBaseRouter.use("/organization", organizationRouter);

export default adminBaseRouter;
