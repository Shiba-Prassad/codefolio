const express = require("express");
const {
  getUserServiceData,
  createUserServiceData,
  updateUserServiceData,
  deleteUserServiceData,
} = require("../controllers/userServiceController");
const router = express.Router();

router.route("/details/:token").get(getUserServiceData);
router.route("/create").post(createUserServiceData);
router.route("/update").post(updateUserServiceData);
router.route("/delete").post(deleteUserServiceData);

module.exports = router;
