import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, firstName = "", lastName = "", bio = "" } = args;
      const userNameExists = await prisma.$exists.user({ username });
      const emailExists = await prisma.$exists.user({ email });
      if (userNameExists) {
        throw Error("This username is already taken");
      } else if (emailExists) {
        throw Error("This Email already have account");
      }
      await prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio,
      });
      return true;
    },
  },
};
