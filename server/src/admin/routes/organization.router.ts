import {
  createOrganization,
  deleteOrganization,
  getOrganization,
  getOrganizations,
} from "../../admin/controllers/adminOrganizationController";
import { Router } from "express";

const organizationRouter = Router();

organizationRouter.post("", createOrganization);
organizationRouter.get("", getOrganizations);
organizationRouter.get("/:organizationId", getOrganization);
organizationRouter.delete("/:organizationId", deleteOrganization);
export default organizationRouter;
