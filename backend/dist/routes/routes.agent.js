import { Router } from "express";
import { addAgent, agentLogin } from "../controllers/agent.controllers";
import { upload } from "../middlewares/multer.middleware";
const router = Router();
router.route("/add-agent").post(upload.fields([
    {
        name: "avatar",
        maxCount: 1,
    }
]), addAgent);
router.route('/agent-login').post(agentLogin);
export default router;
