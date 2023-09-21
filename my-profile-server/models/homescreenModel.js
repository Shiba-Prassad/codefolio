const mongoose = require("mongoose");

const HomescreenSchema = mongoose.Schema({
  banner: {
    slNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
    bannerImage: {
      type: String,
    },
    introductionL1: {
      type: String,
    },
    introductionL2: {
      type: String,
    },
  },
  pageContent1: {
    slNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
    contentTitle: {
      type: String,
    },
    contentHeading: {
      type: String,
    },
    contentData: {
      type: String,
    },
    attachment: {
      type: String,
    },
  },
  services: {
    slNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  middleBanner: {
    slNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
    bannerImage: {
      type: String,
    },
    bannerText: {
      type: String,
    },
  },
  pageContent2: {
    slNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
    contentTitle: {
      type: String,
    },
    contentHeading: {
      type: String,
    },
    contentData: {
      type: String,
    },
    attachment: {
      type: String,
    },
  },
  skills: {
    slNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Homescreen = mongoose.model("Homescreen", HomescreenSchema);

module.exports = Homescreen;
