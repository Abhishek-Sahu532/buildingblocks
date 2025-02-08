import { Router } from "express";
import { verifyJWT } from "../middlewares/verifyJwt.ts";

const router = Router();
router.route("/me").get(verifyJWT);
export default router;
