import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("admin user home");
});

export default userRouter;
