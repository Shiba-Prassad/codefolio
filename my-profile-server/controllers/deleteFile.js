const fs = require("fs");
const path = require("path");
const asyncHandler = require("express-async-handler");

const deleteFile = asyncHandler(async (req, res) => {
  const filename = req.params.fname;

  // Provide the path to the folder where the file is located
  const folderPath = path.join(
    __dirname,
    `../../my-portfolio/public/${req.params.folder}/`
  );

  // Construct the full file path
  const filePath = folderPath + filename;

  // Use fs.unlink to delete the file
  fs.unlink(filePath, (error) => {
    if (error) {
      res.status(500).json({ error: "Failed to delete the file: " + error });
    } else {
      res.json({ message: "File deleted successfully" });
    }
  });
});

module.exports = deleteFile;
