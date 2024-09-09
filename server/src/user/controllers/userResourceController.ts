import { plainToInstance } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import { CreateResourceDto } from "../dtos/resource/resourceCreate.dto";
import { validateOrReject } from "class-validator";
import ResourceService from "../../services/resourceService";
import { ResourceInput } from "../../schemas/resource.schema";
import { resourcePriceUpdateDto, resourceQuantityUpdateDto } from "../dtos/resource/resourceUpdate.dto";

/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: Operations related to resources
 */

/**
 * @swagger
 * /user/resource:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateResourceDto'
 *     responses:
 *       200:
 *         description: The resource was successfully created
 *       400:
 *         description: Bad Request. Validation failed.
 *       500:
 *         description: Server error
 */

export const createResource = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dto = plainToInstance(CreateResourceDto, req.body);
    await validateOrReject(dto);
    const resource = { ...dto, organization: req.user?.organization } as ResourceInput;
    const result = await ResourceService.CreateResource(resource);
    return res.status(200).json(result).end();
  } catch (err) {
    next(err);
  }
};

/**
 * @swagger
 * /user/resource/{resourceId}/price:
 *   patch:
 *     summary: Update the price of a resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the resource
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResourcePriceUpdateDto'
 *     responses:
 *       200:
 *         description: The resource was successfully updated
 *       400:
 *         description: Bad Request. Validation failed.
 *       500:
 *         description: Server error
 */

export const changeResourcePrice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { resourceId } = req.params;
    const userOrganizationId = req.user?.organization;

    if (!resourceId) {
      return res.status(400).json({ error: "Resource ID is required" }).end();
    }
    const dto = plainToInstance(resourcePriceUpdateDto, req.body);
    await validateOrReject(dto);
    const result = await ResourceService.UpdateResourcePrice(resourceId, dto.price, userOrganizationId);
    return res.status(200).json(result).end();
  } catch (err) {
    next(err);
  }
};

/**
 * @swagger
 * /user/resource/{resourceId}/quantity:
 *   patch:
 *     summary: Update the price of a resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the resource
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResourceQuantityUpdateDto'
 *     responses:
 *       200:
 *         description: The resource was successfully updated
 *       400:
 *         description: Bad Request. Validation failed.
 *       500:
 *         description: Server error
 */

export const changeResourceQuantity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { resourceId } = req.params;
    const userOrganizationId = req.user?.organization;

    if (!resourceId) {
      return res.status(400).json({ error: "Resource ID is required" }).end();
    }
    const dto = plainToInstance(resourceQuantityUpdateDto, req.body);
    await validateOrReject(dto);
    const result = await ResourceService.UpdateResourceQuantity(resourceId, dto.quantity, userOrganizationId);
    return res.status(200).json(result).end();
  } catch (err) {
    next(err);
  }
};
