// import prisma from "../config/db.js";
// import { addOwner } from "../controllers/owner.controller.js";

// describe("Add owner functionality", () => {
//   let req;
//   let res;
//   let next;

//   beforeEach(() => {
//     jest.clearAllMocks();
//     req = {
//       body: {
//         fullname: "abhishek sahu",
//         mobile_number: "0000000000",
//         email: "test1@test.com",
//         address: "bhopal",
//         city: "bhopal"
//       }
//     };
//     res = {
//       status: jest.fn().mockReturnThis(), //for method chaining
//       json: jest.fn()
//     };

//     next = jest.fn();
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("should return 400 if required fields are missing", async () => {
//     req.body.fullname = "";
//     await addOwner(req, res, next);
//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({
//       success: false,
//       message: "Please provide the required details"
//     });
//   });

//   test("should return 400 if email is invalid", async () => {
//     req.body.email = "invalidemail";

//     await addOwner(req, res, next);
//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({
//       success: false,
//       message: "Provide the valid email"
//     });
//   });

//   test("should return 400 if the email and mobile number are already used", async () => {
//     // jest.mock('.')
//   });
// });
