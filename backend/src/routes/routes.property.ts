import { Router } from "express";
import { verifyJWT } from "../middlewares/verifyJwt.ts";
import { addProperty } from "../controllers/property.controllers.ts";

const router = Router();

router.route("/add-property").post(verifyJWT, addProperty);

export default router;
