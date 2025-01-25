import jwt from "jsonwebtoken";
import prisma from "../config/db.js";

export const verifyJWT = async (req, res, next) => {
  const token = req?.cookies?.accessToken;
  if (!token) {
    return res.status(500).json({
      success: false,
      message: "Token not found",
    });
  }
  const userDetails = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
if (!userDetails) {
    return res.status(400).json({
      success: false,
      message: "unauthorized access",
    });
  }

  let user = await prisma.agent.findFirst({
    where: {
      email: userDetails?.email,
    },
    select: {
      id: true,
      email: true,
      full_name: true,
      agent_profile_pic: true,
      city: true,
      state: true,
      exp_in_field: true,
      total_exp: true,
    },
  });
  req.user = user;
  next();
};
