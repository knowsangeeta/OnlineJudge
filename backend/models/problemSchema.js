import mongoose from "mongoose";

const problemSchema = mongoose.Schema({
  problemid: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  statement: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  constraints: {
    type: String,
    required: true,
  },
  sinput: {
    type: String,
    required: true,
  },
  soutput: {
    type: String,
    required: true,
  },
  intestcase: {
    type: String,
    //required: false,
  },
  outtestcase: {
    type: String,
    //required: false,
  },
});
export default mongoose.model("problem", problemSchema);