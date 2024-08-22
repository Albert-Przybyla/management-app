import { Router } from "express";
import adminRouter from "./adminRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/admin", adminRouter);
router.use("/user", userRouter);

export default router;
