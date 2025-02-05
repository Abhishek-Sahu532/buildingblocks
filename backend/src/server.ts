import app from "./app.ts";
import dotenv from "dotenv";

dotenv.config();

//HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", (err) => {
  console.log(`error:${err.message}`);
  process.exit(1);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err: unknown) => {
  const error = err as Error;
  console.log(`Error :  ${error.message}`);
  server.close(() => {
    process.exit(1);
  });
});

// connectDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`App is connecting to the PORT`, process.env.PORT);
});
