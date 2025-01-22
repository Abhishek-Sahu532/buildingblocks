import dotenv from "dotenv";
import app from "./app.js";
// import connectDatabase from "./config/db.js";

dotenv.config({ path: ".env" });

// connectDatabase();
app.listen(process.env.PORT || 8080, () => {
  console.log(`App is connecting to the PORT`, process.env.PORT);
});
