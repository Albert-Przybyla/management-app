import { config } from "dotenv";
import express from "express";
import http from "http";
import bodyParser from "body-parser";

config({ path: `${__dirname}/.env` });

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

app.use("/", () => {
  console.log("hi");
});
