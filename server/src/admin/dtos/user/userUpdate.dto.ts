import { UserRole } from "shared/enums/userRole.enum";

export class UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  organization?: string;
}
