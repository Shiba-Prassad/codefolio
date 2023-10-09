const asyncHandler = require("express-async-handler");
const Base64 = require("../models/base64Model");

const getBase64ImageData = asyncHandler(async (req, res) => {
  const { fileName } = req.body;
  const getData = await Base64.findOne({ fileName });
  if (getData) {
    res.status(200).json(getData);
  } else {
    res.status(200).json({ error: `${fileName} - Data not found.` });
  }
});

module.exports = {
  getBase64ImageData,
};
