import { Router } from "express";
import userRouter from "./admins/user.router";

const adminBaseRouter = Router();

adminBaseRouter.get("/", (req, res) => {
  res.send("Admin Home");
});

adminBaseRouter.use("/user", userRouter);

export default adminBaseRouter;
