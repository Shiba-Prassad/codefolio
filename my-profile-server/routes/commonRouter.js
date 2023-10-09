const express = require("express");
const { getBase64ImageData } = require("../controllers/commonController");
const router = express.Router();

router.route("/base64Image/").post(getBase64ImageData);

module.exports = router;
