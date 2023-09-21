const express = require("express");
const {
  getUserSkillData,
  createUserSkillData,
  updateUserSkillData,
  deleteUserSkillData,
  getSkillInfo,
  getSkillQnA,
  createSkillQnAData,
  updateSkillQnAData,
  deleteSkillQnAData,
} = require("../controllers/userSkillController");
const router = express.Router();

router.route("/details/:token").get(getUserSkillData);
router.route("/info/:_id").get(getSkillInfo);
router.route("/getQnA/:skillId").get(getSkillQnA);
router.route("/createQnA").post(createSkillQnAData);
router.route("/updateQnA").post(updateSkillQnAData);
router.route("/deleteQnA").post(deleteSkillQnAData);
router.route("/create").post(createUserSkillData);
router.route("/update").post(updateUserSkillData);
router.route("/delete").post(deleteUserSkillData);

module.exports = router;
