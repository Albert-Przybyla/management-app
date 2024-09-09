export interface OrganizationDto {
  id: string;
  name: string;
  licenseExpiryDate: Date;
  country: string;
  city: string;
  address: string;
  zipcode: string;
  logo: string;
  users: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     OrganizationDto:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier of the organization
 *           example: 60d0fe4f5311236168a109ca
 *         name:
 *           type: string
 *           description: Name of the organization
 *           example: Acme Corp
 *         licenseExpiryDate:
 *           type: string
 *           format: date
 *           description: Date when the organization's license expires
 *           example: 2025-12-31
 *         country:
 *           type: string
 *           description: Country where the organization is located
 *           example: USA
 *         city:
 *           type: string
 *           description: City where the organization is located
 *           example: New York
 *         address:
 *           type: string
 *           description: Full address of the organization
 *           example: 123 Wall Street
 *         zipcode:
 *           type: string
 *           description: Zipcode of the organization's location
 *           example: 10005
 *         logo:
 *           type: string
 *           description: URL of the organization's logo
 *           example: https://example.com/logo.png
 *         users:
 *           type: array
 *           items:
 *             type: string
 *             description: Array of user IDs associated with the organization
 *             example: 60d0fe4f5311236168a109cb
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the organization was created
 *           example: 2023-08-01T14:48:00.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the organization was last updated
 *           example: 2023-08-15T10:33:00.000Z
 */
