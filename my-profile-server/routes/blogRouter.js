const express = require("express");
const {
  getBlogList,
  createBlogList,
  updateBlogList,
  deleteBlogList,
  getBlogDescList,
  createBlogDescList,
  updateBlogDescList,
  deleteBlogDescList,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/blogList").post(getBlogList);
router.route("/AddBlogList").post(createBlogList);
router.route("/updateBlogList").post(updateBlogList);
router.route("/deleteBlog").post(deleteBlogList);
router.route("/blogDescList").post(getBlogDescList);
router.route("/addBlogDesc").post(createBlogDescList);
router.route("/updateBlogDesc").post(updateBlogDescList);
router.route("/deleteBlogDesc").post(deleteBlogDescList);

module.exports = router;
