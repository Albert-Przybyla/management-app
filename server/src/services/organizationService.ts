import mongoose from "mongoose";
import organizationSchema, { OrganizationInput } from "../schemas/organization.schema";

const OrganizationService = {
  async createOrganization(OrganizationInput: OrganizationInput): Promise<any> {
    const organization = await organizationSchema.create(OrganizationInput);
    return organization;
  },

  async addUserToOrganization(organizationId: string, userId: string) {
    const organization = await organizationSchema.findById(organizationId);
    if (!organization) {
      throw new Error("Organization not found");
    }

    organization.users.push(new mongoose.Types.ObjectId(userId));
    await organization.save();
  },
};
export default OrganizationService;
