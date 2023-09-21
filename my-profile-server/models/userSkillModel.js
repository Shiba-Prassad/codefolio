const mongoose = require("mongoose");

const UserSkillSchema = new mongoose.Schema({
  slNo: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  skillName: {
    type: String,
    require: true,
  },
  skillImage: {
    type: String,
  },
  skillHeading: {
    type: String,
  },
  skillDesc: {
    type: String,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const UserSkill = mongoose.model("UserSkill", UserSkillSchema);

module.exports = UserSkill;
