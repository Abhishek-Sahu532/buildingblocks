import { Router } from "express";
import { verifyJWT } from "../middlewares/verifyJwt";
import { addProperty } from "../controllers/property.controllers";
const router = Router();
router.route("/add-property").post(verifyJWT, addProperty);
export default router;
