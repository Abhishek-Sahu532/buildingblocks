import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

import agentRoutes from "./routes/routes.agent.ts";
import propertyRoutes from "./routes/routes.property.ts";
import ownerRoutes from "./routes/routes.owner.ts";

app.use("/api/v1/agent", agentRoutes);
app.use("/api/v1/property", propertyRoutes);
app.use("/api/v1/owner", ownerRoutes);

export default app;
