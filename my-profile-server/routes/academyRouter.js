const express = require("express");
const {
  getAcademy,
  createAcademy,
  updateAcademy,
  deleteAcademy,
} = require("../controllers/academyController");
const router = express.Router();

router.route("/details/:token").get(getAcademy);
router.route("/create").post(createAcademy);
router.route("/update").post(updateAcademy);
router.route("/delete").post(deleteAcademy);

module.exports = router;
