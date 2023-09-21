const mongoose = require("mongoose");

const ComponentLevel3Schema = mongoose.Schema(
  {
    level1Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ComponentLevel1",
    },
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
    componentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ComponentLevel2",
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

const ComponentLevel3 = mongoose.model(
  "ComponentLevel3",
  ComponentLevel3Schema
);

module.exports = ComponentLevel3;
