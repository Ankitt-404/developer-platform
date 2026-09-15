import { authMiddleware } from "../middleware/auth.js";
import { Router } from "express";
import { getMe } from "../controllers/user.js";
const userRouter = Router();
userRouter.get("/me", authMiddleware, getMe);
export { userRouter };
//# sourceMappingURL=user.routes.js.map