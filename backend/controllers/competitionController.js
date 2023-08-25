import asyncHandler from "express-async-handler";
import collegeModel from "../models/collegeModel.js";

import competitionModel from "../models/competitionModel.js";

const createCompetition = asyncHandler(async (req, res) => {
  const { name, startdate, enddate } = req.body;

  if (!name || !startdate || !enddate) {
    res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const { college } = req.body; // Extract collegeId from request body
    const newCompetition = new competitionModel({ ...req.body });
    const savedCompetition = await newCompetition.save();

    // Update th}}college's competitions array with the new competition
    const college_ = await collegeModel.findById(college);
    college_.competitions.push(savedCompetition._id);
    await college_.save();

    res.json(savedCompetition);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export { createCompetition };