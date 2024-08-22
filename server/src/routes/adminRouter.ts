import { Router } from "express";
import userRouter from "./admin/user.router";

const adminBaseRouter = Router();

adminBaseRouter.get("/", (req, res) => {
  res.send("Admin Home");
});

adminBaseRouter.use("/user", userRouter);

export default adminBaseRouter;
