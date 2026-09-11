import argon2 from "argon2";

const hashPassword = async (password) => {
  return await argon2.hash(password);
};

const verifyPassword = async (password, passwordHash) => {
  return await argon2.verify(passwordHash, password);
};

export {
  hashPassword,
  verifyPassword,
};