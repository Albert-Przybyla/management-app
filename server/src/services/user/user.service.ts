import User, { UserInput } from "models/user.model";

export function createUser(input: UserInput) {
  return User.create(input);
}
