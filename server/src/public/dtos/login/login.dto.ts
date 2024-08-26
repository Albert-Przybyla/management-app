import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 100)
  password: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginDto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address.
 *           example: jan.kowalski@example.com
 *         password:
 *           type: string
 *           description: The user's password.
 *           minLength: 8
 *           maxLength: 100
 *           example: password123
 */
