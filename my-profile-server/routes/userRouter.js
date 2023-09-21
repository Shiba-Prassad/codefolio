const express = require("express");
const {
  registerUser,
  loginUserController,
  sendOtpController,
  verifyOtpController,
  updatePasswordController,
  userInfoController,
  editUserProfile,
  authUser,
  getUserController,
  getUserId,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUserController);
router.route("/send_otp").post(sendOtpController);
router.route("/verify_otp").post(verifyOtpController);
router.route("/update_password").put(updatePasswordController);
router.route("/update_profile").put(editUserProfile);
router.route("/info").get(userInfoController);
router.route("/info/:_id").get(userInfoController);
router.route("/getUser/:_id").get(getUserController);
router.route("/isLogin/:token").get(authUser);
router.route("/getId").post(getUserId);

module.exports = router;
