const mongoose = require("mongoose");

const ServiceQnASchema = new mongoose.Schema(
  {
    slNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserService",
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

const ServiceQnA = mongoose.model("ServiceQnA", ServiceQnASchema);

module.exports = ServiceQnA;
