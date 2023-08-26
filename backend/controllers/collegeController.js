import asyncHandler from "express-async-handler";

import collegeModel from "../models/collegeModel.js";

const createCollege = asyncHandler(async (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const newCollege = new collegeModel({
      ...req.body,
    });
    newCollege.save();
    // const savedCollege = await newCollege.save();
    res.json(newCollege);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const getColleges = asyncHandler(async (req, res) => {
  try {
    const colleges = await collegeModel.find().populate("competitions");
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

const getCollege = asyncHandler(async (req, res) => {
  try {
    const college = await collegeModel
      .findById(req.params.id)
      .populate("competitions");
    res.status(200).json(college);
  } catch (error) {}
});

export { createCollege, getColleges, getCollege };
