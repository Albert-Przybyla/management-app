import mongoose from "mongoose";
import resourceSchema, { ResourceInput } from "../schemas/resource.schema";

const ResourceService = {
  async CreateResource(ResourceInput: ResourceInput): Promise<any> {
    const resource = await resourceSchema.create(ResourceInput);
    return resource;
  },

  async UpdateResourcePrice(resourceId: string, price: number, userOrganizationId: string): Promise<any> {
    const resource = await resourceSchema.findById(resourceId);
    if (!resource || resource.organization.toString() !== userOrganizationId.toString()) {
      throw new Error("Resource not found");
    }
    resource.price = price;
    await resource.save();
    return resource;
  },

  async UpdateResourceQuantity(
    resourceId: string,
    quantity: number,
    userOrganizationId: string
  ): Promise<any> {
    const resource = await resourceSchema.findById(resourceId);
    if (!resource || resource.organization.toString() !== userOrganizationId.toString()) {
      throw new Error("Resource not found");
    }
    resource.quantity = quantity;
    await resource.save();
    return resource;
  },
};

export default ResourceService;
