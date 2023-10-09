const UserSkill = require("../models/userSkillModel");
const SkillQnA = require("../models/skillQnAModel");
const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");
const path = require("path");
const fs = require("fs");

const getSkillQnA = asyncHandler(async (req, res) => {
  try {
    if (req.params.skillId && req.params.skillId != "undefined") {
      const getData = await SkillQnA.find({ skillId: req.params.skillId });
      if (getData) {
        res.status(200).json(getData);
      } else {
        res.status(400).json({ error: "Data Not Found" });
      }
    }
  } catch (error) {
    res.status(200).json({ error: "Skills QnA screen data not found" });
  }
});

const createSkillQnAData = asyncHandler(async (req, res) => {
  const { question, answer, skillId, token } = req.body;
  try {
    let noOfQnA = 0;
    const _id = await verifyToken(token);
    const existData = await SkillQnA.find({ skillId: skillId });
    if (existData) {
      noOfQnA = existData.length + 1;
    } else {
      noOfQnA = existData.length + 1;
    }

    const createData = await SkillQnA.create({
      userId: _id,
      skillId,
      question,
      answer,
      slNo: noOfQnA,
    });
    if (createData) {
      res.status(200).json({ createData });
    }
  } catch (error) {
    res.status(200).json({ error: "Skill QnA screen data not found" });
  }
});

const updateSkillQnAData = asyncHandler(async (req, res) => {
  const { active, question, answer, token, id } = req.body;
  try {
    const userId = await verifyToken(token);
    const existData = await SkillQnA.findOne({ userId, _id: id });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access. Please Login." });
    } else {
      const updateData = await SkillQnA.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            active: active,
            question: question,
            answer: answer,
            userId: userId,
          },
        },
        { returnOriginal: false }
      );
      if (updateData) {
        res.status(200).json(updateData);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

const deleteSkillQnAData = asyncHandler(async (req, res) => {
  const { id, token } = req.body;
  try {
    const userId = await verifyToken(token);
    const existData = await SkillQnA.findOne({ userId, _id: id });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access.Please Login." });
    } else {
      const deleteData = await SkillQnA.findOneAndDelete({ _id: id });
      if (deleteData) {
        res.status(200).json(deleteData);
      }
    }
  } catch (error) {
    res.status(200).json({ error: error });
  }
});

const getSkillInfo = asyncHandler(async (req, res) => {
  try {
    if (req.params._id && req.params._id != "undefined") {
      const getData = await UserSkill.findOne({ _id: req.params._id });
      if (getData) {
        res.status(200).json(getData);
      } else {
        res.status(400).json({ error: "Data Not Found" });
      }
    }
  } catch (error) {
    res.status(200).json({ error: "Home screen data not found" });
  }
});

const getUserSkillData = asyncHandler(async (req, res) => {
  try {
    if (req.params.token && req.params.token != "undefined") {
      const _id = await verifyToken(req.params.token);
      const getData = await UserSkill.find({ userId: _id });
      if (getData) {
        res.status(200).json(getData);
      } else {
        res.status(400).json({ error: "Data Not Found" });
      }
    } else {
      const userAdmin = await User.findOne({ isAdmin: true });
      const getData = await UserSkill.find({
        userId: userAdmin._id.toString(),
      });
      if (getData) {
        res.status(200).json(getData);
      } else {
        res.status(400).json({ error: "Data Not Found" });
      }
    }
  } catch (error) {
    res.status(200).json({ error: "Home screen data not found" });
  }
});

const createUserSkillData = asyncHandler(async (req, res) => {
  const { skillName, skillHeading, skillImage, skillDesc, token } = req.body;
  try {
    let noOfSkill = 0;
    const _id = await verifyToken(req.body.token);
    const existData = await UserSkill.find({ userId: _id });
    if (existData) {
      noOfSkill = existData.length + 1;
    } else {
      noOfSkill = existData.length + 1;
    }

    const createData = await UserSkill.create({
      userId: _id,
      skillName,
      skillImage,
      skillHeading,
      skillDesc,
      slNo: noOfSkill,
    });
    if (createData) {
      res.status(200).json({ createData });
    }
  } catch (error) {
    res.status(200).json({ error: "Skill screen data not found" });
  }
});

const updateUserSkillData = asyncHandler(async (req, res) => {
  const { active, skillName, skillHeading, skillImage, skillDesc, token, id } =
    req.body;
  try {
    const userId = await verifyToken(token);
    const existData = await UserSkill.findOne({ userId, _id: id });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access. Please Login." });
    } else {
      const filePath = path.join(
        __dirname,
        `../../my-portfolio/public/uploads/${existData.skillImage}`
      );
      if (existData.skillImage != skillImage && skillImage !== undefined) {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      const updateData = await UserSkill.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            skillName: skillName,
            active: active,
            skillHeading: skillHeading,
            skillImage: skillImage,
            skillDesc: skillDesc,
            userId: userId,
          },
        },
        { returnOriginal: false }
      );
      if (updateData) {
        res.status(200).json(updateData);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

const deleteUserSkillData = asyncHandler(async (req, res) => {
  const { id, token } = req.body;
  try {
    const userId = await verifyToken(token);
    const existData = await UserSkill.findOne({ userId });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access.Please Login." });
    }
    const skill = await UserSkill.findOne({ _id: id });
    if (skill) {
      const filePath = path.join(
        __dirname,
        `../../my-portfolio/public/uploads/${skill.skillImage}`
      );
      if (skill.skillImage) {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    }
    const deleteData = await UserSkill.findOneAndDelete({ _id: id });
    if (deleteData) {
      res.status(200).json(deleteData);
    }
  } catch (error) {
    res.status(200).json({ error: error });
  }
});

module.exports = {
  getUserSkillData,
  createUserSkillData,
  updateUserSkillData,
  deleteUserSkillData,
  getSkillInfo,
  getSkillQnA,
  createSkillQnAData,
  updateSkillQnAData,
  deleteSkillQnAData,
};
