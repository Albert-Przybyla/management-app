import { createUser } from "../../admin/controllers/adminUserController";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/create", createUser);
export default userRouter;
