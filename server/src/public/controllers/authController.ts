import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";

import UserService from "../../services/userService";
import { generateToken } from "../../middlewares/auth";
import { LoginDto } from "../dtos/login/login.dto";

/**
 * @swagger
 * tags:
 *   name: auth
 *   description: Operations related to authentication
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login
 *     tags: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginDto'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *       400:
 *         description: Bad Request. Validation failed.
 *       500:
 *         description: Server error
 */

export const login = async (req: Request, res: Response) => {
  const loginDto = plainToInstance(LoginDto, req.body);

  try {
    const user = await UserService.getUserByEmail(loginDto.email);

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(loginDto.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
