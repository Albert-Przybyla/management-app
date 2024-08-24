import { NextFunction, Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
import OrganizationService from "../../services/organizationService";
import { CreateOrganizationDto } from "../../dtos/organization/organizationCreate.dto";

/**
 * @swagger
 * tags:
 *   name: Organizations
 *   description: Operations related to organizations
 */

/**
 * @swagger
 * /admin/organization/create:
 *   post:
 *     summary: Create a new organization
 *     tags: [Organizations]
 *     requestBody:
 *       description: Details of the organization to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOrganizationDto'
 *     responses:
 *       200:
 *         description: Organization created successfully
 *       400:
 *         description: Bad Request. Validation failed or invalid data.
 *       500:
 *         description: Server error
 */

export const createOrganization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createOrganizationDto = plainToInstance(CreateOrganizationDto, req.body);
    await validateOrReject(createOrganizationDto);
    const user = await OrganizationService.createOrganization(createOrganizationDto);
    return res.status(200).json(user).end();
  } catch (err) {
    next(err);
  }
};
