import { Router } from "express";
import { addAgent, agentLogin } from "../controllers/agent.controllers.ts";
import { upload } from "../middlewares/multer.middleware.ts";

const router = Router();
router.route("/add-agent").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1
    }
  ]),
  addAgent
);

router.route("/login").post(agentLogin);

export default router;
