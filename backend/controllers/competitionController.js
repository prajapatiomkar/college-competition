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
    newCompetition.save();

    // Update th}}college's competitions array with the new competition
    // const college_ = await collegeModel.findById(college);
    // college_.competitions.push(savedCompetition._id);
    // await college_.save();

    res.json(newCompetition);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

const getCompetitions = asyncHandler(async (req, res) => {
  try {
    const competitions = await competitionModel.find();
    res.status(200).json(competitions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
const getCompetition = asyncHandler(async (req, res) => {
  try {
    const competition = await competitionModel.findById(req.params.id);
    res.status(200).json(competition);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

const updateCompetition = asyncHandler(async (req, res) => {
  try {
    const competition = await competitionModel.findById(req.body._id);

    const updatedCompetition = await competition.updateOne({ ...req.body });
    res.status(204).json(updatedCompetition);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const deleteCompetition = asyncHandler(async (req, res) => {
  try {
    const competition = await competitionModel.findByIdAndDelete(req.params.id);

    res.status(204).json(competition);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export {
  createCompetition,
  getCompetitions,
  updateCompetition,
  getCompetition,
  deleteCompetition,
};
