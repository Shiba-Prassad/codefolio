const UserService = require("../models/userServiceModel");
const ServiceQnA = require("../models/serviceQnAModel");
const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");
const Base64 = require("../models/base64Model");
const path = require("path");
const fs = require("fs");

const getServiceQnA = asyncHandler(async (req, res) => {
  try {
    if (req.params.serviceId && req.params.serviceId != "undefined") {
      const getData = await ServiceQnA.find({
        serviceId: req.params.serviceId,
      });
      if (getData) {
        res.status(200).json(getData);
      } else {
        res.status(400).json({ error: "Data Not Found" });
      }
    }
  } catch (error) {
    res.status(200).json({ error: "Services QnA screen data not found" });
  }
});

const createServiceQnAData = asyncHandler(async (req, res) => {
  const { question, answer, serviceId, token } = req.body;
  try {
    let noOfQnA = 0;
    const _id = await verifyToken(token);
    const existData = await ServiceQnA.find({ serviceId: serviceId });
    if (existData) {
      noOfQnA = existData.length + 1;
    } else {
      noOfQnA = existData.length + 1;
    }

    const createData = await ServiceQnA.create({
      userId: _id,
      serviceId,
      question,
      answer,
      slNo: noOfQnA,
    });
    if (createData) {
      res.status(200).json({ createData });
    }
  } catch (error) {
    res.status(200).json({ error: "Service QnA screen data not found" });
  }
});

const updateServiceQnAData = asyncHandler(async (req, res) => {
  const { active, question, answer, token, id } = req.body;
  try {
    const userId = await verifyToken(token);
    const existData = await ServiceQnA.findOne({ userId, _id: id });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access. Please Login." });
    } else {
      const updateData = await ServiceQnA.findOneAndUpdate(
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

const deleteServiceQnAData = asyncHandler(async (req, res) => {
  const { id, token } = req.body;
  try {
    const userId = await verifyToken(token);
    const existData = await ServiceQnA.findOne({ userId, _id: id });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access.Please Login." });
    } else {
      const deleteData = await ServiceQnA.findOneAndDelete({ _id: id });
      if (deleteData) {
        res.status(200).json(deleteData);
      }
    }
  } catch (error) {
    res.status(200).json({ error: error });
  }
});

const getServiceInfo = asyncHandler(async (req, res) => {
  try {
    if (req.params._id && req.params._id != "undefined") {
      const getData = await UserService.findOne({ _id: req.params._id });
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
    const existData = await UserService.findOne({ userId, _id: id });
    if (!existData) {
      return res
        .status(200)
        .json({ error: "You don't have access.Please Login." });
    } else {
      const userServiceImage = existData.serviceImage;
      if (
        userServiceImage !== null &&
        userServiceImage !== "" &&
        userServiceImage !== undefined
      ) {
        await Base64.findOneAndDelete({ fileName: userServiceImage });
      }
      const deleteData = await UserService.findOneAndDelete({ _id: id });
      if (deleteData) {
        res.status(200).json(deleteData);
      }
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
  getServiceInfo,
  getServiceQnA,
  createServiceQnAData,
  updateServiceQnAData,
  deleteServiceQnAData,
};
