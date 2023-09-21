const Homescreen = require("../models/homescreenModel");
const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");

const createHomeScreenData = asyncHandler(async (req, res) => {
  const {
    bannerActive,
    bannerImage,
    introductionL1,
    introductionL2,
    pageContent1Active,
    contentTitle1,
    contentHeading1,
    contentData1,
    attachment1,
    servicesActive,
    middleBannerActive,
    middleBannerImage,
    middleBannerText,
    pageContent2Active,
    contentTitle2,
    contentHeading2,
    contentData2,
    attachment2,
    skillsActive,
  } = req.body;
  try {
    const _id = await verifyToken(req.headers.token);
    const existData = await Homescreen.findOne({ userId: _id });
    if (existData) {
      return res
        .status(200)
        .json({ error: "You have already created your home screen data" });
    }
    const createData = await Homescreen.create({
      userId: _id,
      banner: {
        slNo: 0,
        active: bannerActive,
        bannerImage,
        introductionL1,
        introductionL2,
      },
      pageContent1: {
        slNo: 1,
        active: pageContent1Active,
        contentTitle: contentTitle1,
        contentHeading: contentHeading1,
        contentData: contentData1,
        attachment: attachment1,
      },
      services: {
        slNo: 2,
        active: servicesActive,
      },
      middleBanner: {
        slNo: 3,
        active: middleBannerActive,
        bannerImage: middleBannerImage,
        bannerText: middleBannerText,
      },
      pageContent2: {
        slNo: 4,
        active: pageContent2Active,
        contentTitle: contentTitle2,
        contentHeading: contentHeading2,
        contentData: contentData2,
        attachment: attachment2,
      },
      skills: {
        slNo: 5,
        active: skillsActive,
      },
      userId: _id,
    });
    if (createData) {
      res.status(200).json({ createData });
    }
  } catch (error) {
    res.status(200).json({ error: "Home screen data not found" });
  }
});

const getHomeScreenData = asyncHandler(async (req, res) => {
  try {
    if (req.params.token && req.params.token != "undefined") {
      const _id = await verifyToken(req.params.token);
      const getData = await Homescreen.findOne({ userId: _id });
      if (getData) {
        res.status(200).json(getData);
      } else {
        const createData = await Homescreen.create({
          userId: _id,
          banner: {
            slNo: 0,
            active: false,
            bannerImage: null,
            introductionL1: "",
            introductionL2: "",
          },
          pageContent1: {
            slNo: 1,
            active: false,
            contentTitle: "",
            contentHeading: "",
            contentData: "",
            attachment: null,
          },
          services: {
            slNo: 2,
            active: false,
          },
          middleBanner: {
            slNo: 3,
            active: false,
            bannerImage: "",
            bannerText: "",
          },
          pageContent2: {
            slNo: 4,
            active: false,
            contentTitle: "",
            contentHeading: "",
            contentData: "",
            attachment: null,
          },
          skills: {
            slNo: 5,
            active: false,
          },
        });
        if (createData) {
          res.status(200).json(createData);
        }
        //res.status(400).json({ error: "Data Not Found" });
      }
    } else {
      const userAdmin = await User.findOne({ isAdmin: true });
      const getData = await Homescreen.findOne({
        userId: userAdmin._id.toString(),
      });
      if (getData) {
        res.status(200).json(getData);
      } else {
        res.status(400).json({ error: "Admin Data Not Found" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: "Home screen data not found" });
  }
});

const updateHomeScreenData = asyncHandler(async (req, res) => {
  const {
    banner,
    pageContent1,
    services,
    middleBanner,
    pageContent2,
    skills,
    _id,
    token,
  } = req.body;
  try {
    const userId = await verifyToken(token);
    const existData = await Homescreen.findOne({ userId });
    if (!existData) {
      return res.status(200).json({ error: "You have not home screen data" });
    }
    const createData = await Homescreen.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          banner: {
            slNo: 0,
            active: banner.active,
            bannerImage: banner.bannerImage,
            introductionL1: banner.introductionL1,
            introductionL2: banner.introductionL2,
          },
          pageContent1: {
            slNo: 1,
            active: pageContent1.active,
            contentTitle: pageContent1.contentTitle,
            contentHeading: pageContent1.contentHeading,
            contentData: pageContent1.contentData,
            attachment: pageContent1.attachment,
          },
          services: {
            slNo: 2,
            active: services.active,
          },
          middleBanner: {
            slNo: 3,
            active: middleBanner.active,
            bannerImage: middleBanner.bannerImage,
            bannerText: middleBanner.bannerText,
          },
          pageContent2: {
            slNo: 4,
            active: pageContent2.active,
            contentTitle: pageContent2.contentTitle,
            contentHeading: pageContent2.contentHeading,
            contentData: pageContent2.contentData,
            attachment: pageContent2.attachment,
          },
          skills: {
            slNo: 5,
            active: skills.active,
          },
          userId: userId,
        },
      },
      { returnOriginal: false }
    );
    if (createData) {
      res.status(200).json(createData);
    }
  } catch (error) {
    res.status(200).json({ error: "Home screen data not found" });
  }
});

module.exports = {
  getHomeScreenData,
  createHomeScreenData,
  updateHomeScreenData,
};
