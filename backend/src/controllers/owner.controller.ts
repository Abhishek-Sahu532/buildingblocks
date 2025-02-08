import prisma from "../config/db.ts";
import otpGenerator from "otp-generator";
import { addMinutes } from "date-fns";
import { generateJWTToken } from "../utils/generateJWTToken.ts";
import { Request, Response } from "express";

//tested
export const addOwner = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, mobile_number, email, address, city, state } = req.body;
    console.log(req.body);
    if (!first_name || !last_name || !mobile_number || !email || !address || !city || !state) {
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

    const existingUser = await prisma.houseOwner.findFirst({
      where: {
        OR: [
          {
            email: {
              equals: email
            }
          },
          {
            mobile_number: {
              equals: mobile_number
            }
          }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email and Mobile Number are already used"
      });
    }
    const existingAgent = await prisma.agent.findFirst({
      where: {
        OR: [
          {
            email: {
              equals: email
            }
          },
          {
            mobile_number: {
              equals: mobile_number
            }
          }
        ]
      }
    });

    if (existingAgent) {
      return res.status(400).json({
        success: false,
        message: "Already sign up as Agent"
      });
    }

    //will do mobile number verification
    await prisma.houseOwner.create({
      data: {
        fullname: `${first_name} ${last_name}`,
        mobile_number,
        email,
        address,
        city,
        state
      }
    });

    return res.status(200).json({
      success: true,
      message: "Owner added successfully"
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

export const ownerLogin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please provide the email"
      });
    }

    let regexForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!regexForEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Provide the valid email"
      });
    }

    const user = await prisma.houseOwner.findFirst({
      where: {
        email: email
      }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials"
      });
    }

    let generatedOTP = await otpGenerator.generate(6, {
      specialChars: false
    });

    const expiresAt = addMinutes(new Date(), 15);
    await prisma.houseOwnerAuth.upsert({
      where: {
        house_owner_id: user?.id
      },
      create: {
        expires_at: expiresAt,
        house_owner_id: user?.id,
        otp: generatedOTP
      },
      update: {
        expires_at: expiresAt,
        otp: generatedOTP
      }
    });
    await prisma.houseOwnerAuth.deleteMany({
      where: {
        expires_at: {
          lt: new Date()
        }
      }
    });
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully on user email"
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

export const validateOTP = async (req: Request, res: Response) => {
  try {
    const userOTP = req.body.otp.split(",").join("");
    console.log("userOTP", userOTP);

    let userDetails = await prisma.houseOwnerAuth.findFirst({
      where: {
        otp: userOTP
      },
      include: {
        created_by: true
      }
    });
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    if (userDetails?.otp !== userOTP) {
      return res.status(404).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    if (new Date() > userDetails?.expires_at) {
      return res.status(500).json({
        success: false,
        message: "OTP is expired"
      });
    }

    let email: string = userDetails?.created_by?.email;
    let fullname: string = userDetails?.created_by?.fullname;

    const { accessToken, refreshToken } = await generateJWTToken(email, fullname);

    await prisma.houseOwner.update({
      where: {
        id: userDetails?.created_by?.id
      },
      data: {
        accessToken,
        refreshToken
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

    console.log(accessToken, refreshToken);
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        success: true,
        message: "OTP verified successfully",
        data: userDetails?.created_by
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
