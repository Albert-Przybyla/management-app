import { IsDate, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  name: string;

  @IsNotEmpty()
  @IsDate()
  licenseExpiryDate: Date;

  @IsString()
  @Length(2, 30)
  country: string;

  @IsString()
  @Length(2, 30)
  city: string;

  @IsString()
  @Length(2, 30)
  address: string;

  @IsString()
  @Length(6, 7)
  zipcode: string;

  @IsString()
  logo: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateOrganizationDto:
 *       type: object
 *       required:
 *         - name
 *         - licenseExpiryDate
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the organization.
 *           example: test
 *           minLength: 2
 *           maxLength: 30
 *         licenseExpiryDate:
 *           type: string
 *           format: date
 *           description: The expiry date of the organization's license.
 *           example: "2025-12-31"
 *         country:
 *           type: string
 *           description: The country where the organization is located.
 *           example: Polska
 *           minLength: 2
 *           maxLength: 30
 *         city:
 *           type: string
 *           description: The city where the organization is located.
 *           example: Poznan
 *           minLength: 2
 *           maxLength: 30
 *         address:
 *           type: string
 *           description: The address of the organization.
 *           example: testowa 12
 *           minLength: 2
 *           maxLength: 30
 *         zipcode:
 *           type: string
 *           description: The postal code of the organization's address.
 *           example: 62-081
 *           minLength: 6
 *           maxLength: 7
 *         logo:
 *           type: string
 *           description: URL or path to the organization's logo.
 *           example: http://example.com/logo.png
 */
