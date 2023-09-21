const mongoose = require("mongoose");

const ComponentSchema = mongoose.Schema(
  {
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
    timeStamps: true,
  }
);

const Component = mongoose.model("Component", ComponentSchema);

module.exports = Component;
