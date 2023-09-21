const Project = require("../models/projectModel");
const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");

const getProject = asyncHandler(async (req, res) => {
  try {
    let _id;
    if (req.params.token && req.params.token != "undefined") {
      _id = await verifyToken(req.params.token);
    } else {
      const admin = await User.findOne({ isAdmin: true });
      _id = admin._id;
    }
    const project = await Project.find(
      {
        userId: _id,
      },
      { userId: 0 }
    ).sort({ _id: -1 });
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(200).json({ error: "Project data not found" });
    }
  } catch (error) {
    res.status(200).json({ error: "Project data not found" });
  }
});

const createProject = asyncHandler(async (req, res) => {
  const { active, projectName, responsibility, technologies, token } = req.body;
  try {
    if (token) {
      const _id = await verifyToken(token);
      const user = await User.findOne({ _id });
      if (!user) {
        res.status(400).json({ error: "User not found. Please login." });
      } else {
        const createEmp = await Project.create({
          active,
          projectName,
          responsibility,
          technologies,
          userId: _id,
        });
        if (createEmp) {
          res.status(200).json(createEmp);
        } else {
          res
            .status(400)
            .json({ error: "New Project couldn't be created. Try again." });
        }
      }
    } else {
      res.status(400).json({ error: "You have not access. Please login." });
    }
  } catch (error) {
    res.status(500).json({ error: "Project data not found" });
  }
});

const updateProject = asyncHandler(async (req, res) => {
  const { active, projectName, responsibility, technologies, token, _id } =
    req.body;
  try {
    if (token) {
      const uid = await verifyToken(token);
      const user = await User.findOne({ _id: uid });
      if (!user) {
        res.status(500).json({ error: "User not found. Please login." });
      } else {
        const updateEmp = await Project.findOneAndUpdate(
          { _id },
          {
            $set: {
              active: active,
              projectName,
              responsibility,
              technologies,
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
            .json({ error: "New Project couldn't be created. Try again." });
        }
      }
    } else {
      res.status(400).json({ error: "You have not access. Please login." });
    }
  } catch (error) {
    res.status(200).json({ error: "Project data not found" });
  }
});

const deleteProject = asyncHandler(async (req, res) => {
  try {
    const userId = await verifyToken(req.body.token);
    const _id = req.body._id;
    const deleteProject = await Project.findOneAndDelete(
      { _id, userId },
      { returnOriginal: 0 }
    );
    if (deleteProject) {
      res.status(200).json(deleteProject);
    } else {
      res.status(500).json({ error: "Project couldn't deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: "Project couldn't deleted" });
  }
});

module.exports = {
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
