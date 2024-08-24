import { Router } from "express";

const userBaseRouter = Router();

userBaseRouter.get("/", (req, res) => {
  res.send("user user home");
});

export default userBaseRouter;
