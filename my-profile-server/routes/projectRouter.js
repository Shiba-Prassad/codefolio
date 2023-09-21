const express = require("express");
const {
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const router = express.Router();

router.route("/details/:token").get(getProject);
router.route("/create").post(createProject);
router.route("/update").post(updateProject);
router.route("/delete").post(deleteProject);

module.exports = router;
