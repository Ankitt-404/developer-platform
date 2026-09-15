import { Router } from "express";
import { createProject , getProjects} from "../controllers/project.js";
import { authMiddleware } from "../middleware/auth.js";
import { asyncHandler } from "../utilities/asyncHandler.js";

const projectRouter = Router();

projectRouter.post("/", authMiddleware,asyncHandler(createProject))
projectRouter.get("/", authMiddleware, asyncHandler(getProjects))

export default projectRouter;