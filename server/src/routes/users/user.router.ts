import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("user user home");
});

export default userRouter;
