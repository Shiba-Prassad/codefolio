const mongoose = require("mongoose");

const Base64Schema = mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    fileBase64: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Base64 = mongoose.model("Base64", Base64Schema);

module.exports = Base64;
