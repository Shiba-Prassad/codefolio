const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    mobile: { type: Number, require: true },
    mobile2: { type: Number },
    pic: { type: String, default: null },
    isAdmin: { type: Boolean, default: false },
    otp: { type: String },
    otpCreatedOn: { type: Date },
    otpExpireOn: { type: Date },
    registrationVerified: { type: Boolean, default: false },
    userType: { type: Number, default: 0 },
    permanentAddress: { type: String },
    dob: { type: String },
    language: { type: String },
    strength: { type: String },
    skypeId: { type: String },
    careerObjective: { type: String },
    careerSummary: { type: String },
    personalQualities: { type: String },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = this.password ? await bcrypt.hash(this.password, salt) : null;
  return await this.password;
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
