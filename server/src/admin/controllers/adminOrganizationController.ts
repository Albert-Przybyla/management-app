import { NextFunction, Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
import OrganizationService from "../../services/organizationService";
import { CreateOrganizationDto } from "../dtos/organization/organizationCreate.dto";

/**
 * @swagger
 * tags:
 *   name: Organizations
 *   description: Operations related to organizations
 */

/**
 * @swagger
 * /admin/organization:
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
    const result = await OrganizationService.createOrganization(createOrganizationDto);
    return res.status(200).json(result).end();
  } catch (err) {
    next(err);
  }
};

/**
 * @swagger
 * /admin/organization:
 *   get:
 *     summary: Get a paginated list of organizations
 *     tags: [Organizations]
 *     parameters:
 *       - in: query
 *         name: pageNumber
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of items per page
 *     responses:
 *       200:
 *         description: A paginated list of organizations
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/PagedResponseDto'
 *                 - properties:
 *                     items:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/OrganizationDto'
 *       400:
 *         description: Invalid pagination parameters
 *       500:
 *         description: Server error
 */

export const getOrganizations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pageNumber = Number(req.query.pageNumber) || 1;
    const pageSize = Number(req.query.pageSize) || 10;

    const result = await OrganizationService.getOrganizations(pageNumber, pageSize);
    return res.status(200).json(result).end();
  } catch (err) {
    next(err);
  }
};

/**
 * @swagger
 * /admin/organization/{organizationId}:
 *   get:
 *     summary: Get an organization by its ID
 *     tags: [Organizations]
 *     parameters:
 *       - in: path
 *         name: organizationId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the organization to retrieve
 *     responses:
 *       200:
 *         description: Organization returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrganizationDto'
 *       400:
 *         description: Organization ID is required or invalid
 *       404:
 *         description: Organization not found
 *       500:
 *         description: Server error
 */

export const getOrganization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { organizationId } = req.params;

    if (!organizationId) {
      return res.status(400).json({ error: "Organization ID is required" }).end();
    }

    const result = await OrganizationService.getOrganization(organizationId);
    return res.status(200).json(result).end();
  } catch (err) {
    next(err);
  }
};

/**
 * @swagger
 * /admin/organization/{organizationId}:
 *   delete:
 *     summary: Delete an organization by its ID
 *     tags: [Organizations]
 *     parameters:
 *       - in: path
 *         name: organizationId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the organization to delete
 *     responses:
 *       200:
 *         description: Organization deleted successfully
 *       400:
 *         description: Organization ID is required or invalid
 *       404:
 *         description: Organization not found
 *       500:
 *         description: Server error
 */

export const deleteOrganization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { organizationId } = req.params;

    if (!organizationId) {
      return res.status(400).json({ error: "Organization ID is required" }).end();
    }

    const result = await OrganizationService.deleteOrganization(organizationId);
    return res.status(200).json(result).end();
  } catch (err) {
    next(err);
  }
};
