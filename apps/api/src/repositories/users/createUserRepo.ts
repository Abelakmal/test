import prisma from '@/prisma';
import { IUser } from '@/typeapi/user.type';

export const createUser = async (body: IUser) => {
  try {
    const { firstName, lastName, phoneNumber, email, password } = body;
    const result = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
