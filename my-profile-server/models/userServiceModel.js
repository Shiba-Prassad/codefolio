const mongoose = require("mongoose");

const UserServiceSchema = new mongoose.Schema({
  slNo: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  serviceName: {
    type: String,
    require: true,
  },
  serviceImage: {
    type: String,
  },
  serviceHeading: {
    type: String,
  },
  serviceDesc: {
    type: String,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const UserService = mongoose.model("UserService", UserServiceSchema);

module.exports = UserService;
