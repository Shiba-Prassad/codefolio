const mongoose = require("mongoose");

const AcademySchema = mongoose.Schema({
  slNo: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  academyName: {
    type: String,
  },
  instituteName: {
    type: String,
  },
  passingYear: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Academy = mongoose.model("Academy", AcademySchema);

module.exports = Academy;
