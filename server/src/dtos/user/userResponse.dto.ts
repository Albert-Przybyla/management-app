import { UserRole } from "enums/userRole.enum";

export class UserResponseDto {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  role: UserRole;
  organization: string;
  createdAt: Date;
  updatedAt: Date;
}
