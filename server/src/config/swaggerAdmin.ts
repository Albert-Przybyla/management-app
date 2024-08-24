import { Express, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";

const oprions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Management app",
      description: "Nice app",
      contact: {
        name: "Albert Przybyła",
        email: "albert.przybyla2@gmail.com",
      },
      version,
    },
    servers: [
      {
        url: "http://localhost:8080/admin",
        description: "Serwer administratora",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/admin/controllers/**/*.ts", "./src/dtos/**/*.ts", "./src/enums/*.ts"],
};

const swaggerSpec = swaggerJSDoc(oprions);

const swaggerAdminDocs = async (app: Express, port: number) => {
  app.use("/admin/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/admin/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  // logger
};

export default swaggerAdminDocs;
