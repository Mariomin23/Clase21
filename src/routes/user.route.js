import { Router } from "express";
import {registerController, loginController, userInfoController} from "../controllers/auth.controller.js"
import {authMiddleware} from '../middleware/auth.middleware.js'
const router = Router();

router.post("/register", registerController);

router.post('/login', loginController);

router.post('/info',authMiddleware, userInfoController)

export default router;
