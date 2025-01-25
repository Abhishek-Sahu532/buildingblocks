import jwt from "jsonwebtoken";

export const generateJWTToken = async (userEmail, full_name) => {
  let accessToken = await jwt.sign(
    {
      email: userEmail,
      full_name: full_name,
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRY }
  );
  let refreshToken = await jwt.sign(
    {
      email: userEmail,
      full_name: full_name,
    },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRY }
  );

  return { accessToken, refreshToken };
};
