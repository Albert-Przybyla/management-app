import userSchema, { UserDocument, UserInput } from "../schemas/user.schema";

const UserService = {
  async createUser(userInput: UserInput): Promise<UserDocument> {
    const user = await userSchema.create(userInput);
    return user;
  },
};

export default UserService;
