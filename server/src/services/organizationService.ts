import mongoose from "mongoose";
import organizationSchema from "../schemas/organization.schema";

const OrganizationService = {
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
