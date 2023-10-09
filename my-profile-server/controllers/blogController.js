const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");
const Blog = require("../models/blogModel");
const BlogDesc = require("../models/blogDescModel");
const { ObjectId } = require("mongodb");

const getBlogList = asyncHandler(async (req, res) => {
  const blogId = req.body.blogId;
  const blogList = blogId
    ? await Blog.find({ _id: blogId })
    : await Blog.find();
  if (blogList) {
    res.status(200).json(blogList);
  } else {
    res.status(400).json({ error: "Blog not found" });
  }
});

const createBlogList = asyncHandler(async (req, res) => {
  const { blogQuestion, blogDesc, token } = req.body;
  try {
    if (token) {
      const _id = await verifyToken(token);
      const user = await User.findOne({ _id });
      if (!user) {
        res.status(400).json({ error: "User not found. Please login." });
      } else {
        const createBlog = await Blog.create({
          blogQuestion,
          userId: _id,
        });
        if (createBlog) {
          let blogId = createBlog._id.toString();
          const createBlogDesc = await BlogDesc.create({
            blogId,
            blogDesc,
            userId: _id,
          });
          if (createBlogDesc) {
            const returnBlog = { blog: createBlog, blogDesc: createBlogDesc };
            //await createBlog.blogDesc = createBlogDesc;
            res.status(200).json(returnBlog);
          }
        } else {
          res
            .status(500)
            .json({ error: "New Blog couldn't be created. Try again." });
        }
      }
    } else {
      res.status(500).json({ error: "You have not access. Please login." });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

const updateBlogList = asyncHandler(async (req, res) => {
  const userId = await verifyToken(req.body.token);
  const blogId = req.body.blogId;
  const blogQuestion = req.body.updatedQuestion;
  const updateData = await Blog.findOneAndUpdate(
    { _id: blogId, userId },
    { $set: { blogQuestion, active: req.body.blogActive } },
    { returnOriginal: false }
  );
  if (updateData) {
    res.status(200).json(updateData);
  } else {
    res.status(400).json({ error: "Blog couldn't updated." });
  }
});
const deleteBlogList = asyncHandler(async (req, res) => {
  try {
    const userId = await verifyToken(req.body.token);
    const blogId = req.body.blogId;
    const deleteData = await Blog.findOneAndDelete({ _id: blogId, userId });
    if (deleteData) {
      const deleteDesc = await BlogDesc.deleteMany({ blogId });
      if (deleteDesc) {
        res.status(200).json({ success: "Blog deleted successfully." });
      } else {
        res.status(400).json({ error: "Blog couldn't deleted." });
      }
    } else {
      res.status(400).json({ error: "Blog couldn't updated." });
    }
  } catch (error) {
    console.log(error);
  }
});

const getBlogDescList = asyncHandler(async (req, res) => {
  const blogId = req.body.blogId;
  const blogDescs = await BlogDesc.find({ blogId });
  if (blogDescs) {
    res.status(200).json(blogDescs);
  } else {
    res.status(400).json({ error: "Blog Details Not Found" });
  }
});

const createBlogDescList = asyncHandler(async (req, res) => {
  const userId = await verifyToken(req.body.token);
  const blogId = req.body.blogId;
  const blogDesc = req.body.blogDesc;
  const createBlogDesc = await BlogDesc.create({
    blogId,
    blogDesc,
    userId,
  });
  if (!createBlogDesc) {
    res.status(400).json({ error: "Blog Comment could not created." });
  } else {
    res.status(200).json(createBlogDesc);
  }
});
const updateBlogDescList = asyncHandler(async (req, res) => {
  const blogDescId = req.body.blogDescId;
  const userId = await verifyToken(req.body.token);
  const createBlogDesc = await BlogDesc.findOneAndUpdate(
    {
      _id: blogDescId,
      userId,
    },
    { $set: { blogDesc: req.body.blogDesc } },
    { returnOriginal: false }
  );
  if (!createBlogDesc) {
    res.status(400).json({ error: "Blog could not updated." });
  } else {
    res.status(200).json(createBlogDesc);
  }
});
const deleteBlogDescList = asyncHandler(async (req, res) => {
  const blogDescId = req.body.blogDescId;
  const userId = await verifyToken(req.body.token);
  const deleteDesc = await BlogDesc.findOneAndDelete({
    _id: blogDescId,
    userId,
  });
  if (!deleteDesc) {
    res.status(400).json({ error: "Blog could not updated." });
  } else {
    res.status(200).json({ success: "Blog Description deleted successfully" });
  }
});

module.exports = {
  getBlogList,
  createBlogList,
  updateBlogList,
  deleteBlogList,
  getBlogDescList,
  createBlogDescList,
  updateBlogDescList,
  deleteBlogDescList,
};
