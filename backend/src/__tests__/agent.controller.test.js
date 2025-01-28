import prisma from "../config/db.js";
// import { mockDeep } from "jest-mock-extended";
import bcrypt from "bcrypt";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";
import sendEmail from "../utils/sendEmail.js";
import { addAgent } from "../controllers/agent.controllers.js";
// import jest from "jest";

// jest.mock("../config/db.js", () => ({
//   prisma: {
//     agent: {
//       findFirst: jest.fn(),
//       create: jest.fn(),
//     },
//   },
// }));
// let prisma;
jest.mock("bcrypt");
jest.mock("../utils/uploadOnCloudinary.js");
jest.mock("../utils/sendEmail.js");

describe("addAgent function", () => {
  let req, res, next;

  beforeEach(() => {
    // prisma = mockDeep();

    // console.log("prisma", prisma);
    jest.clearAllMocks();
    req = {
      body: {
        firstName: "Abhi",
        lastName: "Sahu",
        email: "asahu532@gmail.com",
        password: "12345678",
        confirmPassword: "12345678",
        city: "Bhopal",
        mobileNumber: "1234567890",
        state: "Madhya Pradesh",
        area: "MP Nagar",
        experienceInField: true,
        prevOrgName: "Google",
        totalExp: 3,
      },
      files: {
        avatar: "./pic.jpeg",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return 400 if required fields are missing", async () => {
    req.body.firstName = "";

    await addAgent(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Please provide the required details",
    });
  });

  test("should return 400 if email is invalid", async () => {
    req.body.email = "invalidemail";

    await addAgent(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Provide the valid email",
    });
  });

  test("should return 400 if password and confirm password does not match", async () => {
    req.body.password = "123";
    await addAgent(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Password and Confirm password does not match",
    });
  });

  test("should return 400 if email is already registered", async () => {
    jest.mock("../config/db.js", () => ({
      prisma: {
        agent: {
          findFirst: jest.fn(),
          create: jest.fn(),
        },
      },
    }));

    prisma.agent = {
      findFirst: jest
        .fn()
        .mockResolvedValueOnce({ email: "asahu532@gmail.com" }),
    };

    // prisma.agent.findFirst.mockResolvedValueOnce({
    //   email: "asahu532@gmail.com",
    // });
    req = {
      body: {
        firstName: "Abhi",
        lastName: "Sahu",
        email: "asahu532@gmail.com",
        password: "12345678",
        confirmPassword: "12345678",
        city: "Bhopal",
        mobileNumber: "1234567890",
        state: "Madhya Pradesh",
        area: "MP Nagar",
        experienceInField: true,
        prevOrgName: "Google",
        totalExp: 3,
      },
      files: {
        avatar: "./pic.jpeg",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    await addAgent(req, res, next);
    // Assertions
    expect(prisma.agent.findFirst).toHaveBeenCalledWith({
      where: { email: "asahu532@gmail.com" },
    });
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message:
        "Please use the another email, this email is taken by other user",
    });
  });

  test("should return 200 if agent is added successfully", async () => {
    req = {
      body: {
        firstName: "Abhi",
        lastName: "Sahu",
        email: "test12@gmail.com",
        password: "12345678",
        confirmPassword: "12345678",
        city: "Bhopal",
        mobileNumber: "1234567890",
        state: "Madhya Pradesh",
        area: "MP Nagar",
        experienceInField: "true",
        prevOrgName: "Google",
        totalExp: 3,
      },
      files: {
        avatar: [
          {
            path: "/path/to/avatar/image.jpg", // Simulate a file path for the avatar
          },
        ],
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();

    jest.mock("../config/db.js", () => ({
      prisma: {
        agent: {
          findFirst: jest.fn(),
          create: jest.fn(),
        },
      },
    }));

    bcrypt.hash.mockResolvedValue("hashedPassword");
    uploadOnCloudinary.mockResolvedValue({ url: "imageurl" });

    prisma.agent = {
      findFirst: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValueOnce({
        id: "1",
        first_name: "Abhi",
        last_name: "Sahu",
        full_name: "Abhi Sahu",
        email: "test12@gmail.com",
        agent_profile_pic: "imageurl",
        password: "12345678",
        city: "Bhopal",
        mobile_number: "1234567890",
        state: "Madhya Pradesh",
        local_area: "MP Nagar",
        exp_in_field: true,
        prev_organization_name: "Google",
        total_exp: 3,
      }),
    };

    await addAgent(req, res, next);
    console.log("prisma.agent.create", prisma.agent.create);

    console.log("Actual arguments:", prisma.agent.create.mock.calls);

    expect(prisma.agent.create).toHaveBeenCalledWith({
      data: {
        first_name: "Abhi",
        last_name: "Sahu",
        full_name: "Abhi Sahu",
        email: "test12@gmail.com",
        agent_profile_pic: "imageurl",
        password: "hashedPassword",
        city: "Bhopal",
        mobile_number: "1234567890",
        state: "Madhya Pradesh",
        local_area: "MP Nagar",
        exp_in_field: true,
        prev_organization_name: "Google",
        total_exp: 3,
      },
    });

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "Agent created successfully",
      agent: expect.objectContaining({
        id: "1",
        first_name: "Abhi",
        last_name: "Sahu",
        full_name: "Abhi Sahu",
        email: "test12@gmail.com",
        password: "12345678",
        mobile_number: "1234567890",
        agent_profile_pic: "imageurl",
        city: "Bhopal",
        state: "Madhya Pradesh",
        local_area: "MP Nagar",
        exp_in_field: true,
        prev_organization_name: "Google",
        total_exp: 3,
      }),
    });
  });

  test("should return 500 if any error occurs", async () => {
    prisma.agent = {
      findFirst: jest.fn().mockRejectedValueOnce(new Error("Server Error")),
      create: jest.fn().mockResolvedValueOnce(new Error("Server Error")),
    };
    await addAgent(req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Server Error",
    });
  });
});
``;
