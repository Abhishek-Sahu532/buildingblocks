const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");

//HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", (err) => {
  console.log(`error:${err.message}`);
  process.exit(1);
});

//ENV CONFIGURATION
dotenv.config({ path: "config/.env"});

// connecting database
connectDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log("Server is running on ", process.env.PORT);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error :  ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
