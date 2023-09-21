const mongoose = require("mongoose");

const EmployersSchema = mongoose.Schema({
  slNo: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  employerName: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Employers = mongoose.model("Employers", EmployersSchema);

module.exports = Employers;
