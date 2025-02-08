import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CORS_ORIGIN
        : ["http://localhost:5173", "http://localhost:8000", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

import agentRoutes from "./routes/routes.agent.ts";
import propertyRoutes from "./routes/routes.property.ts";
import ownerRoutes from "./routes/routes.owner.ts";
import authRoutes from "./routes/routes.auth.ts";

app.use("/api/v1/agent", agentRoutes);
app.use("/api/v1/property", propertyRoutes);
app.use("/api/v1/owner", ownerRoutes);
app.use("/api/v1/auth", authRoutes);

export default app;
