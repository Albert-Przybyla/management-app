export interface PagedResponseDto<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     PagedResponseDto:
 *       type: object
 *       properties:
 *         items:
 *           type: array
 *         page:
 *           type: integer
 *           description: The current page number
 *           example: 1
 *         pageSize:
 *           type: integer
 *           description: The number of items per page
 *           example: 10
 *         totalPages:
 *           type: integer
 *           description: The total number of pages
 *           example: 2
 *         totalItems:
 *           type: integer
 *           description: The total number of items
 *           example: 20
 */
