import express from "express";
import {
  createCollege,
  getColleges,
} from "../controllers/collegeController.js";

import { createCompetition } from "../controllers/competitionController.js";
const router = express.Router();

// Public Routes
// router.get("/profile", getUserProfile);
router.post("/college", createCollege);
router.get("/colleges", getColleges);

router.post("/competition", createCompetition);

export default router;
