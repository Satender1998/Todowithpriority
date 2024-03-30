import express from "express"
import { login, logout, myPorfile, register } from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me",isAuthenticated, myPorfile);
router.post("/register", register);

export default router;