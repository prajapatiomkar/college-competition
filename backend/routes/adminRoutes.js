import express from "express";
import {
  createCollege,
  getCollege,
  getColleges,
} from "../controllers/collegeController.js";

import {
  createCompetition,
  deleteCompetition,
  getCompetition,
  getCompetitions,
  updateCompetition,
} from "../controllers/competitionController.js";
const router = express.Router();

// Public Routes
// router.get("/profile", getUserProfile);
router.post("/college", createCollege);
router.get("/colleges", getColleges);
router.get("/college/:id", getCollege);

router.post("/competition", createCompetition);
router.post("/update-competition", updateCompetition);
router.get("/competitions", getCompetitions);
router.get("/competition/:id", getCompetition);
router.delete("/delete-competition/:id", deleteCompetition);

export default router;
