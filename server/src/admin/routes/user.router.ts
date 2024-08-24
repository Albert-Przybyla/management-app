import { createUser } from "../../admin/controllers/adminUserController";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("admin user home");
});

userRouter.post("/create", createUser);
export default userRouter;
