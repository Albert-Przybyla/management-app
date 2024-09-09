import { IsEmail, IsEnum, IsNotEmpty, IsString, Length, IsUUID } from "class-validator";
import { UserRole } from "../../../shared/enums/userRole.enum";
import { IsObjectId } from "../../../decorators/isObjectId.decorator";
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 100)
  password: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;

  @IsNotEmpty()
  @IsObjectId({ message: "Invalid organization ID" })
  organization: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserDto:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - role
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the user.
 *           example: Jan
 *           minLength: 2
 *           maxLength: 30
 *         lastName:
 *           type: string
 *           description: The last name of the user.
 *           example: Kowalski
 *           minLength: 2
 *           maxLength: 30
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
 *         role:
 *           $ref: '#/components/schemas/UserRole'
 *           description: The user's role.
 *         organization:
 *           type: string
 *           format: uuid
 *           description: The ID of the organization to which the user belongs.
 *           example: 66c7becd5073848146472857
 */
