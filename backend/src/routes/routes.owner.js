import { Router } from "express";
import {
  addOwner,
  ownerLogin,
  validateOTP,
} from "../controllers/owner.controller.js";

const router = Router();

router.route("/signup").post(addOwner);
router.route("/signin").post(ownerLogin);
router.route("/validateOTP").post(validateOTP);

export default router;
