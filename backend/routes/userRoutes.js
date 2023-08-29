import express from "express";
import {
  // getUserProfile,
  loginController,
  logoutController,
  registerController,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

// Public Routes
router.get("/profile/:id", getUserProfile);
// router.post("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

router.post("/login", loginController);
router.post("/register", registerController);
router.delete("/logout", logoutController);

export default router;
