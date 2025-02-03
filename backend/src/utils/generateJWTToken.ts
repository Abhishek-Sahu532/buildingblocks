import jwt from "jsonwebtoken";

export const generateJWTToken = async (userEmail: string, full_name: string) => {
  let accessToken = await jwt.sign(
    {
      email: userEmail,
      full_name: full_name
    },
    process.env.JWT_ACCESS_SECRET as string,
    { expiresIn: process.env.JWT_ACCESS_EXPIRY as string }
  );
  let refreshToken = await jwt.sign(
    {
      email: userEmail,
      full_name: full_name
    },
    process.env.JWT_REFRESH_SECRET as string,
    { expiresIn: process.env.JWT_REFRESH_EXPIRY as string }
  );

  return { accessToken, refreshToken };
};
