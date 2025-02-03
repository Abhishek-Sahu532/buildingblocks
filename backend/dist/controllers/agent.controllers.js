import prisma from "../config/db";
import bcrypt from "bcrypt";
import uploadOnCloudinary from "../utils/uploadOnCloudinary";
import { generateJWTToken } from "../utils/generateJWTToken";
export const addAgent = async (req, res, next) => {
    try {
        console.log("Inside addAgent");
        const { firstName, lastName, email, password, confirmPassword, city, mobileNumber, state, area, experienceInField, prevOrgName, totalExp, } = req.body;
        console.log(req.body);
        if (!firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            !city ||
            !mobileNumber ||
            !state ||
            !area ||
            experienceInField === undefined) {
            return res.status(400).json({
                success: false,
                message: "Please provide the required details",
            });
        }
        //EMAIL CHECK
        let regexForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!regexForEmail.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Provide the valid email",
            });
        }
        console.log("Before password check");
        //PASSWORD CHECK
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm password does not match",
            });
        }
        console.log("Before checking for the user based on email");
        //checking for the user based on email
        let existingUser = await prisma.agent.findFirst({
            where: {
                email: email,
            },
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Please use the another email, this email is taken by other user",
            });
        }
        console.log("Before hashing the password", existingUser);
        let hashedPassword = await bcrypt.hash(password, 10);
        let avatarLocalPath = req.files?.avatar[0]?.path;
        if (!avatarLocalPath) {
            return res.status(400).json({
                success: false,
                message: "Please attach the picture",
            });
        }
        let avatar = await uploadOnCloudinary(avatarLocalPath);
        console.log("before uploading the image", avatarLocalPath);
        console.log("Before prisma.agent.create");
        let newAgent = await prisma.agent
            .create({
            data: {
                first_name: firstName,
                last_name: lastName,
                full_name: `${firstName} ${lastName}`,
                email: email,
                password: hashedPassword,
                agent_profile_pic: avatar?.url,
                mobile_number: mobileNumber,
                city: city,
                state: state,
                local_area: area,
                exp_in_field: experienceInField == "true" ? true : false,
                prev_organization_name: prevOrgName,
                total_exp: Number(totalExp),
            },
        })
            .catch((error) => {
            console.log("err", error);
        });
        console.log("Agent created:", newAgent);
        // console.log(newAgent)
        //     let subject = "Welcome to Our Platform!";
        //     let message = `Hi ${firstName},\n\nThank you for signing up! We're excited to have you on board.\n\nBest Regards,\nThe BuildingBlocks Team`;
        //     await sendEmail(email, subject, message);
        return res.status(200).json({
            success: true,
            message: "Agent created successfully",
            agent: newAgent,
        });
    }
    catch (error) {
        console.log("Error", error);
        return res.status(500).json({
            success: false,
            message: error?.message,
        });
    }
};
export const agentLogin = async (req, res, next) => {
    const { email, password } = req.body;
    //EMAIL CHECK
    let regexForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!regexForEmail.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Provide the valid email",
        });
    }
    let checkUser = await prisma.agent.findFirst({
        where: {
            email: email,
        },
    });
    if (!checkUser) {
        return res.status(404).json({
            success: false,
            message: "Invalid credentials",
        });
    }
    const isPasswordMatch = await bcrypt.compare(password, checkUser?.password);
    if (!isPasswordMatch) {
        return res.status(400).json({
            success: false,
            message: "Invalid credentials",
        });
    }
    const { email: userEmail, full_name } = checkUser;
    const { accessToken, refreshToken } = await generateJWTToken(userEmail, full_name);
    await prisma.agent.update({
        where: {
            id: checkUser?.id,
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
        message: "Login successfully",
    });
};
