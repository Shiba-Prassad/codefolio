const mongoose = require("mongoose");

const ComponentLevel2Schema = mongoose.Schema(
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
      ref: "ComponentLevel1",
    },
    subComponent: {
      type: Number,
      default: 0,
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

const ComponentLevel2 = mongoose.model(
  "ComponentLevel2",
  ComponentLevel2Schema
);

module.exports = ComponentLevel2;
