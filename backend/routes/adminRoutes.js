import express from "express";
import {
  createCollege,
  getCollege,
  getColleges,
} from "../controllers/collegeController.js";

import {
  createCompetition,
  getCompetitions,
} from "../controllers/competitionController.js";
const router = express.Router();

// Public Routes
// router.get("/profile", getUserProfile);
router.post("/college", createCollege);
router.get("/colleges", getColleges);
router.get("/college/:id", getCollege);

router.post("/competition", createCompetition);
router.get("/competitions", getCompetitions);

export default router;
