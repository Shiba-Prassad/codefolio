const multer = require("multer");
const path = require("path");
const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");
const fs = require("fs");
const Base64 = require("../models/base64Model");
// const mammoth = require("mammoth");
// const { convertToPDF } = require("../utils/documentConverter");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../my-portfolio/public/uploadedFiles/"),
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
}).single("image");

const createPdf = asyncHandler(async (req, res) => {
  try {
    const _id = await verifyToken(req.headers.token);
    const user = await User.findById(_id);
    if (user) {
      upload(req, res, async (err) => {
        if (err) {
          res.status(400).json({ message: err });
        } else {
          if (req.file == undefined) {
            res.status(400).json({ message: "Error: No file selected!" });
          } else {
            const fileAsBase64 = await fs.readFileSync(req.file.path, "base64");
            await Base64.create({
              fileName: req.file.filename,
              fileBase64: fileAsBase64,
            });
            res.status(200).json({
              message: "file uploaded successfully!",
              filename: req.file.filename,
            });
            //createPdfFile(req, res);
          }
        }
      });
    } else {
      res.status(500).json({ message: "You have not Logged In." });
    }
  } catch (error) {
    res.status(500).json({ message: "You have not Logged In." });
  }
});

module.exports = createPdf;
