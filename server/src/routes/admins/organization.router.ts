import { createOrganization } from "../../controllers/admins/adminOrganizationController";
import { Router } from "express";

const organizationRouter = Router();

organizationRouter.get("/", (req, res) => {
  res.send("admin user home");
});

organizationRouter.post("/create", createOrganization);
export default organizationRouter;
