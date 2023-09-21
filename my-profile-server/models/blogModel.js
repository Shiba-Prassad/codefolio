const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    slNo: { type: Number },
    active: { type: Boolean, default: true },
    blogQuestion: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
