const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  slNo: { type: Number },
  active: { type: Boolean, default: true },
  projectName: { type: String },
  responsibility: { type: String },
  technologies: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
