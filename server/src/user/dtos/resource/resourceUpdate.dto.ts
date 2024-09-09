import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
import { IsObjectId } from "../../../decorators/isObjectId.decorator";
export class resourcePriceUpdateDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ResourcePriceUpdateDto:
 *       type: object
 *       required:
 *         - price
 *       properties:
 *         price:
 *           type: number
 *           description: The price of the resource.
 *           example: 19.99
 */

export class resourceQuantityUpdateDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ResourceQuantityUpdateDto:
 *       type: object
 *       required:
 *         - quantity
 *       properties:
 *         quantity:
 *           type: number
 *           description: the quantity of the resource.
 *           example: 100
 */
