import userSchema, { UserDocument, UserInput } from "../schemas/user.schema";

const UserController = {
  async createUser(userInput: UserInput): Promise<UserDocument> {
    const user = await userSchema.create(userInput);
    return user;
  },
};

export default UserController;
