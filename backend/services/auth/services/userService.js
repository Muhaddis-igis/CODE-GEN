import { db } from "../prisma/client.js";

const findUserByEmail = async (email) => {
  return await db.orm.public.User.findUnique({
    where: {
      email,
    },
  });
};

const findUserByUsername = async (username) => {
  return await db.orm.public.User.findUnique({
    where: {
      username,
    },
  });
};

const findUserById = async (id) => {
  return await db.orm.public.User.findUnique({
    where: {
      id,
    },
  });
};

const createUser = async ({ username, email, passwordHash }) => {
  return await db.orm.public.User.create({
    data: {
      username,
      email,
      passwordHash,
    },
  });
};

export {
  findUserByEmail,
  findUserByUsername,
  findUserById,
  createUser,
};