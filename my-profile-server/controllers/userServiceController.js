const UserService = require("../models/userServiceModel");
const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");
const path = require("path");
const fs = require("fs");

const getUserServiceData = asyncHandler(async (req, res) => {
  try {
    if (req.params.token && req.params.token != "undefined") {
      const _id = await verifyToken(req.params.token);
      const getData = await UserService.find({ userId: _id });
      if (getData) {
        res.status(200).json(getData);
      } else {
        res.status(400).json({ error: "Data Not Found" });
      }
    } else {
      const userAdmin = await User.findOne({ isAdmin: true });
      const getData = await UserService.find({
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

const createUserServiceData = asyncHandler(async (req, res) => {
  const { serviceName, serviceHeading, serviceImage, serviceDesc, token } =
    req.body;
  try {
    let noOfService = 0;
    const _id = await verifyToken(req.body.token);
    const existData = await UserService.find({ userId: _id });
    if (existData) {
      noOfService = existData.length + 1;
    } else {
      noOfService = existData.length + 1;
    }

    const createData = await UserService.create({
      userId: _id,
      serviceName,
      serviceImage,
      serviceHeading,
      serviceDesc,
      slNo: noOfService,
    });
    if (createData) {
      res.status(200).json({ createData });
    }
  } catch (error) {
    res.status(200).json({ error: "Service screen data not found" });
  }
});

const updateUserServiceData = asyncHandler(async (req, res) => {
  const {
    active,
    serviceName,
    serviceHeading,
    serviceImage,
    serviceDesc,
    token,
    id,
  } = req.body;

  try {
    const userId = await verifyToken(token);
    const existData = await UserService.findOne({ userId, _id: id });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access. Please Login." });
    } else {
      const filePath = path.join(
        __dirname,
        `../../my-portfolio/public/uploads/${existData.serviceImage}`
      );
      if (existData.serviceImage != serviceImage && serviceImage !== "") {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    }
    const updateData = await UserService.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          active: active,
          serviceName: serviceName,
          serviceHeading: serviceHeading,
          serviceImage: serviceImage,
          serviceDesc: serviceDesc,
          userId: userId,
        },
      },
      { returnOriginal: false }
    );
    if (updateData) {
      res.status(200).json(updateData);
    }
  } catch (error) {
    console.log(error);
  }
});

const deleteUserServiceData = asyncHandler(async (req, res) => {
  const { id, token } = req.body;
  try {
    const userId = await verifyToken(token);
    const existData = await UserService.findOne({ userId });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access.Please Login." });
    }
    const deleteData = await UserService.findOneAndDelete({ _id: id });
    if (deleteData) {
      res.status(200).json(deleteData);
    }
  } catch (error) {
    res.status(200).json({ error: error });
  }
});

module.exports = {
  getUserServiceData,
  createUserServiceData,
  updateUserServiceData,
  deleteUserServiceData,
};
