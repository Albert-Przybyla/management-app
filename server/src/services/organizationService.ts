import mongoose from "mongoose";
import organizationSchema, { OrganizationInput } from "../schemas/organization.schema";
import { PagedResponseDto } from "../shared/dtos/pagedResponse.dto";

const OrganizationService = {
  async createOrganization(OrganizationInput: OrganizationInput): Promise<any> {
    const organization = await organizationSchema.create(OrganizationInput);
    return organization;
  },

  async getOrganization(organizationId: string): Promise<any> {
    if (!mongoose.isValidObjectId(organizationId)) {
      throw new Error("Invalid Organization ID");
    }
    const organization = await organizationSchema.findById(organizationId);
    if (!organization) {
      throw new Error("Organization not found");
    }
    return organization;
  },

  async deleteOrganization(organizationId: string): Promise<any> {
    if (!mongoose.isValidObjectId(organizationId)) {
      throw new Error("Invalid Organization ID");
    }
    const organization = await organizationSchema.findById(organizationId);
    if (!organization) {
      throw new Error("Organization not found");
    }
    const status = await organizationSchema.findByIdAndDelete(organizationId);
    return status;
  },

  async getOrganizations(pageNumber: number = 1, pageSize: number = 10): Promise<PagedResponseDto<any>> {
    const skip = (pageNumber - 1) * pageSize;
    const organizations = await organizationSchema.find().skip(skip).limit(pageSize).exec();
    const totalItems = await organizationSchema.countDocuments();
    const totalPages = Math.ceil(totalItems / pageSize);
    return {
      items: organizations,
      page: pageNumber,
      pageSize: pageSize,
      totalItems: totalItems,
      totalPages: totalPages,
    };
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
