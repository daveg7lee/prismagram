import { prisma } from "../../../../generated/prisma-client";
import { generateSecret } from "../../../utils";

export default {
  Mutation: {
    requestSecret: async (_, args, { request }) => {
      console.log(request);
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        throw Error();
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
