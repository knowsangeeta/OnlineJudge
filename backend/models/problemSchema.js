import mongoose from "mongoose";

const problemSchema = mongoose.Schema({
  problemid: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
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
  inputformat:{
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

  },
  outtestcase: {
    type: String,

  },
});
export default mongoose.model("problem", problemSchema);

