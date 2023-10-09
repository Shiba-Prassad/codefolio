const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateWebToken, verifyToken } = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, mobile, pic = null, isAdmin } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(200).json({
      error: "This email is already exist!! Please try with another",
    });
    //throw new Error("This email already exist.");
  } else {
    const otp = await Math.floor(1000 + Math.random() * 9000);
    const salt = await bcrypt.genSalt(10);
    const hashedOtp = await bcrypt.hash(otp.toString(), salt);
    const user = await User.create({
      name,
      email,
      password,
      mobile,
      pic,
      isAdmin,
      otp: hashedOtp,
      otp_created_on: Date.now(),
      otpExpireOn: Date.now() + 3600000,
    });

    if (user) {
      await res.status(200).json({
        //name: user.name,
        email: user.email,
        // mobile: user.mobile,
        // isAdmin: user.isAdmin,
        // token: await generateWebToken(user._id),
      });
    }
  }
});

const sendOtpController = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const userExist = await User.findOne({ email });
  if (!userExist) {
    return res.status(200).json({
      error: "This email is not exist!! Please Register",
    });
  } else {
    const otp = await Math.floor(1000 + Math.random() * 9000);
    const salt = await bcrypt.genSalt(10);
    const hashedOtp = await bcrypt.hash(otp.toString(), salt);
    const user = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          otp: hashedOtp,
          otpCreatedOn: Date.now(),
          otpExpireOn: new Date(Date.now() + 60000),
        },
      }
    );

    if (user) {
      await res.status(200).json({
        email: user.email,
      });
    }
  }
});
const verifyOtpController = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(200).json({
      error: "This email is not exist!! Please Register",
    });
  } else {
    if (user.otpExpireOn < Date.now()) {
      return res.status(200).json({
        error: "OTP has been expired!!",
      });
    } else {
      const matchOtp = await bcrypt.compare(otp, user.otp);
      if (matchOtp) {
        if (user.registrationVerified) {
          await res.status(200).json({
            forgotUser: user.email,
          });
        } else {
          await User.findOneAndUpdate(
            { email },
            { $set: { registrationVerified: true } }
          );
          await res.status(200).json({
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            mobile2: user.mobile2,
            skypeId: user.skypeId,
            pic: user.pic,
            isAdmin: user.isAdmin,
            userType: user.userType,
            token: await generateWebToken(user._id),
          });
        }
      } else {
        return res.status(200).json({
          error: "Please enter correct OTP!!",
        });
      }
    }
  }
});

const updatePasswordController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(200).json({
      error: "This email is not exist!! Please Register",
    });
  } else {
    const salt = await bcrypt.genSalt(10);
    const newPassword = password ? await bcrypt.hash(password, salt) : null;

    await User.findOneAndUpdate({ email }, { $set: { password: newPassword } });
    await res.status(200).json({
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      mobile2: user.mobile2,
      skypeId: user.skypeId,
      pic: user.pic,
      isAdmin: user.isAdmin,
      userType: user.userType,
      token: await generateWebToken(user._id),
    });
  }
});

const loginUserController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      mobile2: user.mobile2,
      skypeId: user.skypeId,
      pic: user.pic,
      isAdmin: user.isAdmin,
      userType: user.userType,
      token: await generateWebToken(user._id),
    });
  } else {
    return res.status(200).json({
      error: "Please enter correct email id and password!!",
    });
  }
});

const userInfoController = asyncHandler(async (req, res) => {
  try {
    if (req.params._id && req.params._id != "undefined") {
      const _id = await verifyToken(req.params._id);
      const user = await User.findById(_id);
      res.status(200).json({
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        mobile2: user.mobile2,
        skypeId: user.skypeId,
        pic: user.pic,
        isAdmin: user.isAdmin,
        userType: user.userType,
        permanentAddress: user.permanentAddress,
        dob: user.dob,
        language: user.language,
        strength: user.strength,
        skypeId: user.skypeId,
        careerObjective: user.careerObjective,
        careerSummary: user.careerSummary,
        personalQualities: user.personalQualities,
        //token: await generateWebToken(user._id),
      });
    } else {
      const user = await User.findOne({ isAdmin: true });
      res.status(200).json({
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        mobile2: user.mobile2,
        skypeId: user.skypeId,
        pic: user.pic,
        isAdmin: user.isAdmin,
        userType: user.userType,
        permanentAddress: user.permanentAddress,
        dob: user.dob,
        language: user.language,
        strength: user.strength,
        skypeId: user.skypeId,
        careerObjective: user.careerObjective,
        careerSummary: user.careerSummary,
        personalQualities: user.personalQualities,
        //token: await generateWebToken(user._id),
      });
    }
  } catch (error) {
    res.status(200).json({ error: "User Details not found" });
  }
});

const getUserController = asyncHandler(async (req, res) => {
  try {
    if (req.params._id && req.params._id != "undefined") {
      const _id = req.params._id;
      const user = await User.findById(_id);
      res.status(200).json({
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        mobile2: user.mobile2,
        skypeId: user.skypeId,
        pic: user.pic,
        isAdmin: user.isAdmin,
        userType: user.userType,
        permanentAddress: user.permanentAddress,
        dob: user.dob,
        language: user.language,
        strength: user.strength,
        skypeId: user.skypeId,
        careerObjective: user.careerObjective,
        careerSummary: user.careerSummary,
        personalQualities: user.personalQualities,
        //token: await generateWebToken(user._id),
      });
    }
  } catch (error) {
    res.status(200).json({ error: "User Details not found" });
  }
});

const editUserProfile = asyncHandler(async (req, res) => {
  try {
    const _id = await verifyToken(req.headers.token);
    const updateRequest = req.body;
    const user = await User.findById(_id);
    if (user) {
      const updateUser = await User.findOneAndUpdate(
        { email: user.email },
        {
          $set: {
            name: updateRequest.name,
            mobile: updateRequest.mobile,
            mobile2: updateRequest.mobile2,
            pic: updateRequest.pic,
            permanentAddress: updateRequest.permanentAddress,
            dob: updateRequest.dob,
            language: updateRequest.language,
            strength: updateRequest.strength,
            skypeId: updateRequest.skypeId,
            careerObjective: updateRequest.careerObjective,
            careerSummary: updateRequest.careerSummary,
            personalQualities: updateRequest.personalQualities,
          },
        }
      );
      if (updateUser) {
        res.status(200).json({
          name: updateRequest.name,
          email: user.email,
          mobile: updateRequest.mobile,
          mobile2: updateRequest.mobile2,
          pic: updateRequest.pic,
          isAdmin: user.isAdmin,
          userType: user.userType,
          token: await generateWebToken(user._id),
        });
      } else {
        res.status(500).json({ error: "user not updated" });
      }
    } else {
      res.status(500).json({ error: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "User Details not found" });
  }
});

const authUser = asyncHandler(async (req, res) => {
  if (req.params.token) {
    const _id = await verifyToken(req.params.token);
    const user = await User.findById(_id);
    if (user) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  } else {
    res.status(200).json(false);
  }
});

const getUserId = asyncHandler(async (req, res) => {
  const uid = await verifyToken(req.body.token);
  if (uid) {
    res.status(200).json(uid);
  } else {
    res.status(400).json("");
  }
});

module.exports = {
  registerUser,
  loginUserController,
  sendOtpController,
  verifyOtpController,
  updatePasswordController,
  userInfoController,
  getUserController,
  editUserProfile,
  authUser,
  getUserId,
};
