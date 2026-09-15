import { Router } from "express";
import { analyzeProject, getProjectAnalysis } from "../controllers/analysis.js";
import { authMiddleware } from "../middleware/auth.js";
import { asyncHandler } from "../utilities/asyncHandler.js";

const router = Router();

router.post("/projects/:id/analyze", authMiddleware,asyncHandler(analyzeProject))
router.get("/projects/:id/analysis", authMiddleware, asyncHandler(getProjectAnalysis))


export default router;