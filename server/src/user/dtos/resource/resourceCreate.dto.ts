import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
import { IsObjectId } from "../../../decorators/isObjectId.decorator";
export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  name: string;

  @IsString()
  description: string;

  @IsString()
  code: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateResourceDto:
 *       type: object
 *       required:
 *         - name
 *         - quantity
 *         - price
 *         - organization
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the resource.
 *           example: Example Resource
 *           minLength: 2
 *           maxLength: 30
 *         description:
 *           type: string
 *           description: A brief description of the resource.
 *           example: This is a sample resource used for demonstration purposes.
 *         code:
 *           type: string
 *           description: A unique code identifying the resource.
 *           example: RES1234
 *         quantity:
 *           type: number
 *           description: The quantity of the resource available.
 *           example: 100
 *         price:
 *           type: number
 *           description: The price of the resource.
 *           example: 19.99
 */
