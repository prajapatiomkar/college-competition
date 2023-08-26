import mongoose from "mongoose";

const competitionSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  startdate: { type: String, require: true },
  enddate: { type: String, require: true },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
});

const competitionModel = mongoose.model("Competition", competitionSchema);
export default competitionModel;
