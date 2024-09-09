/**
 * @swagger
 * components:
 *   schemas:
 *     UserRole:
 *       type: string
 *       enum:
 *         - admin
 *         - owner
 *         - manager
 *         - user
 *       description: The role of a user in the system
 */

export enum UserRole {
  Admin = "admin",
  Owner = "owner",
  Manager = "manager",
  User = "user",
}
