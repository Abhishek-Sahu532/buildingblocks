import jwt from "jsonwebtoken";
import prisma from "../config/db.js";
import { AuthenticatedRequest } from "../utils/authenticatedRequest.ts";
import { NextFunction, Response } from "express";

export const verifyJWT = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req?.cookies?.accessToken;
  if (!token) {
    return res.status(500).json({
      success: false,
      message: "Token not found"
    });
  }
  const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  if (!decoded) {
    return res.status(400).json({
      success: false,
      message: "unauthorized access"
    });
  }

  //FINDING USER IN AGENT TABLE
  let user = await prisma.agent.findUnique({
    where: {
      email: decoded?.email
    },
    select: {
      id: true,
      email: true,
      mobile_number: true,
      full_name: true,
      agent_profile_pic: true,
      city: true,
      state: true,
      exp_in_field: true,
      total_exp: true
    }
  });

  if (user) {
    return (req.user = { ...user, type: "agent" });
  }

  //FINDING USER IN OWNER TABLE
  if (!user) {
    user = await prisma.houseOwner.findUnique({
      where: {
        email: decoded?.email
      },
      select: {
        id: true,
        email: true,
        fullname: true,
        city: true,
        state: true,
        mobile_number: true,
        address: true
      }
    });
    if (user) {
      return (req.user = { ...user, type: "owner" });
    }
  }
  // req.user = user;
  next();
};
