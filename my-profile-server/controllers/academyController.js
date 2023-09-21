const Academy = require("../models/academyModel");
const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");

const getAcademy = asyncHandler(async (req, res) => {
  try {
    let _id;
    if (req.params.token && req.params.token != "undefined") {
      _id = await verifyToken(req.params.token);
    } else {
      const admin = await User.findOne({ isAdmin: true });
      _id = admin._id;
    }
    const academy = await Academy.find(
      {
        userId: _id,
      },
      { userId: 0 }
    ).sort({ passingYear: -1 });
    if (academy) {
      res.status(200).json(academy);
    } else {
      res.status(200).json({ error: "Academy data not found" });
    }
  } catch (error) {
    res.status(200).json({ error: "Academy data not found" });
  }
});

const createAcademy = asyncHandler(async (req, res) => {
  const { active, academyName, instituteName, passingYear, token } = req.body;
  try {
    if (token) {
      const _id = await verifyToken(token);
      const user = await User.findOne({ _id });
      if (!user) {
        res.status(400).json({ error: "User not found. Please login." });
      } else {
        const createEmp = await Academy.create({
          active,
          academyName,
          passingYear,
          instituteName,
          userId: _id,
        });
        if (createEmp) {
          res.status(200).json(createEmp);
        } else {
          res
            .status(400)
            .json({ error: "New Academy couldn't be created. Try again." });
        }
      }
    } else {
      res.status(400).json({ error: "You have not access. Please login." });
    }
  } catch (error) {
    res.status(200).json({ error: "Academy data not found" });
  }
});

const updateAcademy = asyncHandler(async (req, res) => {
  const { active, academyName, instituteName, passingYear, token, _id } =
    req.body;
  try {
    if (token) {
      const uid = await verifyToken(token);
      const user = await User.findOne({ _id: uid });
      if (!user) {
        res.status(400).json({ error: "User not found. Please login." });
      } else {
        const updateEmp = await Academy.findOneAndUpdate(
          { _id },
          {
            $set: {
              active: active,
              academyName,
              passingYear,
              instituteName,
              userId: uid,
            },
          },
          { returnOriginal: false }
        );
        if (updateEmp) {
          res.status(200).json(updateEmp);
        } else {
          res
            .status(400)
            .json({ error: "New Academy couldn't be created. Try again." });
        }
      }
    } else {
      res.status(400).json({ error: "You have not access. Please login." });
    }
  } catch (error) {
    res.status(200).json({ error: "Academy data not found" });
  }
});

const deleteAcademy = asyncHandler(async (req, res) => {
  try {
    const userId = await verifyToken(req.body.token);
    const _id = req.body._id;
    const deleteAcademy = await Academy.findOneAndDelete(
      { _id, userId },
      { returnOriginal: 0 }
    );
    if (deleteAcademy) {
      res.status(200).json(deleteAcademy);
    } else {
      res.status(401).json({ error: "Academy couldn't deleted" });
    }
  } catch (error) {
    res.status(401).json({ error: "Academy couldn't deleted" });
  }
});

module.exports = {
  getAcademy,
  createAcademy,
  updateAcademy,
  deleteAcademy,
};
