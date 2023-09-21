const express = require("express");
const {
  getEmployer,
  createEmployer,
  updateEmployer,
  deleteEmployer,
} = require("../controllers/employerController");
const router = express.Router();

router.route("/details/:token").get(getEmployer);
router.route("/create").post(createEmployer);
router.route("/update").post(updateEmployer);
router.route("/delete").post(deleteEmployer);

module.exports = router;
