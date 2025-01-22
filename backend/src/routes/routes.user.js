import { Router } from "express";
import { addAgent } from "../controllers/agent.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/add-agent").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    }
  ]),
  addAgent
);

export default router;
