const mongoose = require("mongoose");

const BlogDescSchema = mongoose.Schema(
  {
    slNo: { type: Number },
    active: { type: Boolean, default: true },
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
    blogDesc: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const BlogDesc = mongoose.model("BlogDesc", BlogDescSchema);

module.exports = BlogDesc;
