import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";

export const addAgent = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      city,
      state,
      area,
      experienceInField,
      prevOrgName,
      totalExp,
    } = req.body;

    console.log(typeof experienceInField);
    console.log(lastName, email, password, confirmPassword, city, state);

    if (
      [
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        city,
        state,
        experienceInField,
      ].some((field) => field.trim == "")
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
    //PASSWORD CHECK
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm password does not match",
      });
    }

    //checking for the user based on email

    let existingUser = await prisma.agent.findFirst({
      where: {
        email: email,
      },
    });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "Please use the another email, this email is taken by other user",
      });
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    let avatarLocalPath = req.files.avatar[0].path;

    if (!avatarLocalPath) {
      return res.status(400).json({
        success: false,
        message: "Please attach the picture",
      });
    }
    let avatar = await uploadOnCloudinary(avatarLocalPath);

    let newAgent = await prisma.agent.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: hashedPassword,
        agent_profile_pic: avatar?.url,
        city: city,
        state: state,
        local_area: area,
        exp_in_field: experienceInField == "true" ? true : false,
        prev_organization_name: prevOrgName,
        total_exp: parseInt(totalExp),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Agent created successfully",
      agent: newAgent,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};
