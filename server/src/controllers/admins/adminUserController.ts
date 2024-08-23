import { NextFunction, Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
import UserController from "../../services/userService";
import { CreateUserDto } from "../../dtos/user/userCreate.dto";
import OrganizationService from "../../services/organizationService";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

/**
 * @swagger
 * /admin/user/create:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserDto'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *       400:
 *         description: Bad Request. Validation failed.
 *       500:
 *         description: Server error
 */

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createUserDto = plainToInstance(CreateUserDto, req.body);
    await validateOrReject(createUserDto);
    const user = await UserController.createUser(createUserDto);

    await OrganizationService.addUserToOrganization(createUserDto.organization, String(user._id));

    return res.status(200).json(user).end();
  } catch (err) {
    next(err);
  }
};
