import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  name: { type: String, require: true },
  location: { type: String, require: true },
  competitions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Competition",
    },
  ],
});

const collegeModel = mongoose.model("College", collegeSchema);
export default collegeModel;
