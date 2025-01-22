import express from "express";
import  cookieParser   from "cookie-parser";
import multer from "multer";
const app = express();

// //HANDLING UNCAUGHT EXCEPTION
// process.on("uncaughtException", (err) => {
//   console.log(`error:${err.message}`);
//   process.exit(1);
// });

// //Unhandled promise rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error :  ${err.message}`);
//   server.close(() => {
//     process.exit(1);
//   });
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

import agentUser from "./routes/routes.user.js";


app.use("/api/v1/agent", agentUser);

export default app;
