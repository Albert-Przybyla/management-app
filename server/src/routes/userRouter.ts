import { Router } from "express";
import userRouter from "./user/user.router";

const userBaseRouter = Router();

userBaseRouter.get("/", (req, res) => {
  res.send("User Home");
});

userBaseRouter.use("/user", userRouter);

export default userBaseRouter;
