import e, { json } from "express";
import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import otpGenerator from "otp-generator";
import { addMinutes } from "date-fns";
import { generateJWTToken } from "../utils/generateJWTToken.js";

//tested
export const addOwner = async (req, res) => {
  try {
    const { fullname, mobile_number, email, address, city } = req.body;

    if (
      [fullname, mobile_number, email, address, city].some(
        (field) => field.trim == ""
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide the required details",
      });
    }

    //EMAIL CHECK
    let regexForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    console.log("regexForEmail", regexForEmail.test(email));

    if (!regexForEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Provide the valid email",
      });
    }

    const existingUser = await prisma.houseOnwer.findFirst({
      where: {
        OR: [
          {
            email: {
              equals: email,
            },
          },
          {
            mobile_number: {
              equals: mobile_number,
            },
          },
        ],
      },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email and Mobile Number are already used",
      });
    }

    const existingAgent = await prisma.agent.findFirst({
      where: {
        OR: [
          {
            email: {
              equals: email,
            },
          },
          {
            mobile_number: {
              equals: mobile_number,
            },
          },
        ],
      },
    });

    if (existingAgent) {
      return res.status(400).json({
        success: false,
        message: "Already sign up as Agent",
      });
    }

    //will do mobile number verification
    const newOnwer = await prisma.houseOnwer.create({
      data: {
        fullname,
        mobile_number,
        email,
        address,
        city,
      },
    });

    return res.status(200).json({
      success: true,
      data: newOnwer,
      message: "Onwer added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

export const ownerLogin = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please provide the email",
      });
    }

    let regexForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!regexForEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Provide the valid email",
      });
    }

    const user = await prisma.houseOnwer.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    let generatedOTP = await otpGenerator.generate(6, {
      specialChars: false,
    });

    const expiresAt = addMinutes(new Date(), 15);
    await prisma.houseOnwerAuth.create({
      data: {
        expires_at: expiresAt,
        house_owner_id: user?.id,
        otp: generatedOTP,
      },
    });
    return res.status(200).json({
      success: success,
      message: "OTP sent successfully on user email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

export const validateOTP = async (req, res) => {
  try {
    const userOTP = req.body.otp;

    // let user = await prisma.houseOnwer.findFirst({
    //   where: {
    //     accessToken: token,
    //   },
    // });

    // if (!user) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid OTP",
    //   });
    // }
    console.log(userOTP);
    let userDetails = await prisma.houseOnwerAuth.findFirst({
      where: {
        otp: userOTP,
      },
      include: {
        created_by: true,
      },
    });
    if (userDetails?.otp !== userOTP) {
      return res.status(404).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (new Date() > userDetails?.expires_at) {
      return res.status(500).json({
        success: false,
        message: "OTP is expired",
      });
    }

    const { accessToken, refreshToken } = await generateJWTToken(
      userDetails?.created_by?.email,
      userDetails?.created_by?.fullname
    );

    await prisma.houseOnwer.update({
      where: {
        id: userDetails?.created_by?.id,
      },
      data: {
        accessToken,
        refreshToken,
      },
    });

    const options = {
      // domain: 'vid-stream-client.vercel.app',
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        success: true,
        message: "OTP verified successfully",
        data: userDetails?.created_by,
      });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error?.message,
    });
  }
};
