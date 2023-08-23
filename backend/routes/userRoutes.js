import express from "express";
import {
  // getUserProfile,
  loginController,
  logoutController,
  registerController,
} from "../controllers/userController.js";

const router = express.Router();

// Public Routes
// router.get("/profile", getUserProfile);
router.post("/login", loginController);
router.post("/register", registerController);
router.delete("/logout", logoutController);

export default router;
