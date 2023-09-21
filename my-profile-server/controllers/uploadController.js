const multer = require("multer");
const path = require("path");
const asyncHandler = require("express-async-handler");
const { authUser } = require("./userController");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../my-portfolio/public/uploads/"),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize the upload middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("image");

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only!");
  }
}

const uploadFile = asyncHandler(async (req, res) => {
  try {
    const _id = await verifyToken(req.headers.token);
    const user = await User.findById(_id);
    if (user) {
      upload(req, res, (err) => {
        if (err) {
          res.status(400).json({ message: err });
        } else {
          if (req.file == undefined) {
            res.status(400).json({ message: "Error: No file selected!" });
          } else {
            res.status(200).json({
              message: "Image uploaded successfully!",
              filename: req.file.filename,
            });
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

module.exports = uploadFile;
