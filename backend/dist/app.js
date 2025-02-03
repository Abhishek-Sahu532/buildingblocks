import express from "express";
import cookieParser from "cookie-parser";
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
import agentRoutes from "./routes/routes.agent.js";
import propertyRoutes from "./routes/routes.property.js";
import ownerRoutes from "./routes/routes.owner.js";
app.use("/api/v1/agent", agentRoutes);
app.use("/api/v1/property", propertyRoutes);
app.use("/api/v1/owner", ownerRoutes);
export default app;
