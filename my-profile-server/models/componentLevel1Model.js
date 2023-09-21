const mongoose = require("mongoose");

const ComponentLevel1Schema = mongoose.Schema(
  {
    componentTitle: {
      type: String,
      require: true,
    },
    componentUrl: {
      type: String,
      require: true,
    },
    componentActive: {
      type: Boolean,
      default: true,
    },
    componentHeading: {
      type: String,
    },
    componentDescription: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const ComponentLevel1 = mongoose.model(
  "ComponentLevel1",
  ComponentLevel1Schema
);

module.exports = ComponentLevel1;
