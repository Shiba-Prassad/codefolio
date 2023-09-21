const Employers = require("../models/employerModel");
const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");

const getEmployer = asyncHandler(async (req, res) => {
  try {
    let _id;
    if (req.params.token && req.params.token != "undefined") {
      _id = await verifyToken(req.params.token);
    } else {
      const admin = await User.findOne({ isAdmin: true });
      _id = admin._id;
    }
    const employer = await Employers.find(
      {
        userId: _id,
      },
      { userId: 0 }
    ).sort({ startDate: -1 });
    if (employer) {
      res.status(200).json(employer);
    } else {
      res.status(200).json({ error: "Employer data not found" });
    }
  } catch (error) {
    res.status(200).json({ error: "Employer data not found" });
  }
});

const createEmployer = asyncHandler(async (req, res) => {
  const { active, employerName, startDate, endDate, token } = req.body;
  try {
    if (token) {
      const _id = await verifyToken(token);
      const user = await User.findOne({ _id });
      if (!user) {
        res.status(400).json({ error: "User not found. Please login." });
      } else {
        const createEmp = await Employers.create({
          active,
          employerName,
          startDate,
          endDate,
          userId: _id,
        });
        if (createEmp) {
          res.status(200).json(createEmp);
        } else {
          res
            .status(500)
            .json({ error: "New Employer couldn't be created. Try again." });
        }
      }
    } else {
      res.status(500).json({ error: "You have not access. Please login." });
    }
  } catch (error) {
    res.status(500).json({ error: "Employer data not found" });
  }
});

const updateEmployer = asyncHandler(async (req, res) => {
  const { active, employerName, startDate, endDate, token, _id } = req.body;
  try {
    if (token) {
      const uid = await verifyToken(token);
      const user = await User.findOne({ _id: uid });
      if (!user) {
        res.status(500).json({ error: "User not found. Please login." });
      } else {
        const updateEmp = await Employers.findOneAndUpdate(
          { _id },
          {
            $set: {
              active: active,
              employerName,
              startDate,
              endDate,
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
            .json({ error: "New Employer couldn't be created. Try again." });
        }
      }
    } else {
      res.status(400).json({ error: "You have not access. Please login." });
    }
  } catch (error) {
    res.status(200).json({ error: "Employer data not found" });
  }
});

const deleteEmployer = asyncHandler(async (req, res) => {
  try {
    const userId = await verifyToken(req.body.token);
    const _id = req.body._id;
    const deleteEmployer = await Employers.findOneAndDelete(
      { _id, userId },
      { returnOriginal: 0 }
    );
    if (deleteEmployer) {
      res.status(200).json(deleteEmployer);
    } else {
      res.status(500).json({ error: "Employer couldn't deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: "Employer couldn't deleted" });
  }
});

module.exports = {
  getEmployer,
  createEmployer,
  updateEmployer,
  deleteEmployer,
};
