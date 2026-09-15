import { Router } from "express";
import { register, login } from "../controllers/auth.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
const router = Router();
router.post("/register", asyncHandler(register));
router.post("/login", asyncHandler(login));
export default router;
//# sourceMappingURL=auth.routes.js.map