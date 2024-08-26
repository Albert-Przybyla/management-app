import { config } from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import http from "http";
import connectDB from "./config/db";
import swaggerAdminDocs from "./config/swaggerAdmin";
import swaggerUserDocs from "./config/swaggerUser";
import { validationErrorHandler } from "./middlewares/validationErrorHandler";
import userBaseRouter from "./admin/routes/user.router";
import adminBaseRouter from "./admin/routes/adminRoutes";
import publicBaseRouter from "./public/routes/publicRoutes";

config({ path: `.env` });

const PORT = +process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/admin", adminBaseRouter);
app.use("/user", userBaseRouter);
app.use("/", publicBaseRouter);

app.use(validationErrorHandler);

// Middleware do obsługi innych błędów (opcjonalnie)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Final Error Handler: ", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Utworzenie serwera HTTP
const server = http.createServer(app);

connectDB()
  .then(() => {
    swaggerAdminDocs(app, PORT);
    swaggerUserDocs(app, PORT);
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
    process.exit(1);
  });
