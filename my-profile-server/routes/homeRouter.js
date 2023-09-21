const express = require("express");
const {
  getHomeScreenData,
  createHomeScreenData,
  updateHomeScreenData,
} = require("../controllers/homescrrenController");
const router = express.Router();

router.route("/details/").get(getHomeScreenData);
router.route("/details/:token").get(getHomeScreenData);
router.route("/create").post(createHomeScreenData);
router.route("/update").put(updateHomeScreenData);

module.exports = router;
