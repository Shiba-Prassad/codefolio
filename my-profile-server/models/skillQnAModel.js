const mongoose = require("mongoose");

const SkillQnASchema = new mongoose.Schema(
  {
    slNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
    skillId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserSkill",
    },
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const SkillQnA = mongoose.model("SkillQnA", SkillQnASchema);

module.exports = SkillQnA;
