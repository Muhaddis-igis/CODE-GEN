import jwt from "jsonwebtoken";

const createAccessToken = (user, provider) => {
  return jwt.sign(
    {
      user_id: user.id,
      username: user.username,
      is_verified_email: user.isVerifiedEmail,
      provider,
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: "15m",
      issuer: "coding-agent-auth",
      audience: "coding-agent",
    }
  );
};

const verifyAccessToken = (token) => {
  return jwt.verify(
    token,
    process.env.JWT_ACCESS_SECRET,
    {
      issuer: "coding-agent-auth",
      audience: "coding-agent",
    }
  );
};


const createRefreshToken = (sessionId) => {
  return jwt.sign(
    {
      session_id: sessionId,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "30d",
      issuer: "coding-agent-auth",
      audience: "coding-agent",
    }
  );
};

const verifyRefreshToken = (token) => {
  return jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET,
    {
      issuer: "coding-agent-auth",
      audience: "coding-agent",
    }
  );
};

export {
  createAccessToken,
  verifyAccessToken,
  createRefreshToken,
  verifyRefreshToken,
};