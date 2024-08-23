import { config } from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import http from "http";
import connectDB from "./config/db";
import swaggerDocs from "./config/swagger";
import router from "./routes/router";
import { validationErrorHandler } from "./middlewares/validationErrorHandler";

config({ path: `.env` });

const PORT = +process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/", router);

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
    swaggerDocs(app, PORT);
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
    process.exit(1);
  });
