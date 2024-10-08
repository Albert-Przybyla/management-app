import { config } from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import http from "http";
import connectDB from "./config/db";
import swaggerAdminDocs from "./config/swaggerAdmin";
import swaggerUserDocs from "./config/swaggerUser";
import { validationErrorHandler } from "./middlewares/validationErrorHandler";
import adminBaseRouter from "./admin/routes/adminRoutes";
import publicBaseRouter from "./shared/routes/publicRoutes";
import userBaseRouter from "./user/routes/userRoutes";

config({ path: `.env` });

const PORT = +process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/admin", adminBaseRouter);
app.use("/user", userBaseRouter);
app.use("/", publicBaseRouter);

app.use(validationErrorHandler);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Final Error Handler: ", err.stack);

  if (err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message || "An error occurred" });
  }

  res.status(err.status || 500).json({ error: err.message || "An error occurred" });
});

const server = http.createServer(app);

connectDB()
  .then(() => {
    swaggerUserDocs(app, PORT);
    // swaggerAdminDocs(app, PORT);
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
    process.exit(1);
  });
