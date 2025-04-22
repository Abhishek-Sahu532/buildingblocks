import prisma from "../config/db.ts";
import bcrypt from "bcrypt";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.ts";
// import sendEmail from "../utils/sendEmail.ts";
import { generateJWTToken } from "../utils/generateJWTToken.ts";
import { Request, Response } from "express";
import { AuthenticatedRequest } from "../utils/authenticatedRequest.ts";

export const addAgent = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      city,
      mobileNumber,
      state,
      area,
      experienceInField = false,
      prevOrgName,
      totalExp
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !city ||
      !mobileNumber ||
      !state ||
      !area
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide the required details"
      });
    }
    //EMAIL CHECK
    let regexForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (!regexForEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Provide the valid email"
      });
    }
    //PASSWORD CHECK
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm password does not match"
      });
    }
    //checking for the existing agent based on email
    let existingAgent = await prisma.agent.findFirst({
      where: {
        OR: [{ email: email }, { mobile_number: mobileNumber }]
      }
    });

    if (existingAgent) {
      return res.status(400).json({
        success: false,
        message: "Please use other mobile number and email id"
      });
    }

    //CHECKING FOR THE OWNER BASED ON EMAIL AND MOBILE NUMBER
    let existingOwner = await prisma.houseOwner.findFirst({
      where: {
        OR: [{ email: email }, { mobile_number: mobileNumber }]
      }
    });

    if (existingOwner) {
      return res.status(400).json({
        success: false,
        message: "Please use other mobile number and email id"
      });
    }
    let hashedPassword = await bcrypt.hash(password, 10);
    if (!req.files || !req.files.avatar) {
      return res.status(400).json({
        success: false,
        message: "Please attach the picture"
      });
    }
    console.log("req.files", req.files.avatar[0]?.path);
    let avatarLocalPath = req.files.avatar[0]?.path;

    if (!avatarLocalPath) {
      return res.status(400).json({
        success: false,
        message: "Please attach the picture"
      });
    }
    let avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar) {
      return res.status(500).json({
        success: false,
        message: "Error in uploading the picture"
      });
    }

    await prisma.agent.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`,
        email: email,
        password: hashedPassword,
        agent_profile_pic: avatar?.secure_url,
        mobile_number: mobileNumber,
        city: city,
        state: state,
        local_area: area,
        exp_in_field: experienceInField == "true" ? true : false,
        prev_organization_name: prevOrgName,
        total_exp: Number(totalExp)
      }
    });
    //SENDING GREETING MAILS
    // console.log(newAgent)
    //     let subject = "Welcome to Our Platform!";
    //     let message = `Hi ${firstName},\n\nThank you for signing up! We're excited to have you on board.\n\nBest Regards,\nThe BuildingBlocks Team`;

    //     await sendEmail(email, subject, message);

    return res.status(200).json({
      success: true,
      message: "Agent created successfully"
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error", error);
      return res.status(500).json({
        success: false,
        message: error?.message
      });
    }
  }
};

export const agentLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email?.trim) {
      return res.status(400).json({
        success: false,
        message: "Please provide the email."
      });
    }

    if (!password?.trim) {
      return res.status(400).json({
        success: false,
        message: "Please provide the password."
      });
    }

    //EMAIL CHECK
    let regexForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (!regexForEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Provide the valid email"
      });
    }
    let checkUser = await prisma.agent.findFirst({
      where: {
        email: email
      }
    });
    if (!checkUser) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, checkUser?.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }
    const { email: userEmail, full_name } = checkUser;

    const { accessToken, refreshToken } = await generateJWTToken(userEmail, full_name);
    await prisma.agent.update({
      where: {
        id: checkUser?.id
      },
      data: {
        accessToken,
        refreshToken
      }
    });

    const loggedAgent = await prisma.agent.findUnique({
      where: {
        email: userEmail
      },
      select: {
        full_name: true,
        email: true,
        mobile_number: true,
        agent_profile_pic: true,
        city: true,
        state: true,
        local_area: true,
        exp_in_field: true
      }
    });

    interface CookieOptions {
      domain?: string;
      path: string;
      httpOnly: boolean;
      secure: boolean;
      sameSite: "none";
    }
    const options: CookieOptions = {
      // domain: 'vid-stream-client.vercel.app',
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "none"
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        success: true,
        data: loggedAgent,
        message: "Login successfully"
      });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error", error);
      return res.status(500).json({
        success: false,
        message: error?.message
      });
    }
  }
};

export const getAllAgents = async (req: Request, res: Response) => {
  try {
    let agents = await prisma.agent.findMany({});

    if (!agents) {
      return res.status(200).json({
        success: false,
        message: "No Agents Found"
      });
    }

    return res.status(200).json({
      success: true,
      data: agents,
      message: "All agents fetched successfully"
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error", error);
      return res.status(500).json({
        success: false,
        message: error?.message
      });
    }
  }
};
