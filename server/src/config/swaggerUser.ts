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
  apis: [
    "./src/user/controllers/**/*.ts",
    "./src/shared/controllers/**/*.ts",
    "./src/user/dtos/**/*.ts",
    "./src/shared/dtos/**/*.ts",
    "./src/shared/enums/**/*.ts",
  ],
};

const swaggerSpec = swaggerJSDoc(oprions);

const swaggerUserDocs = async (app: Express, port: number) => {
  app.use("/docs/user", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/docs/user/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};

export default swaggerUserDocs;
