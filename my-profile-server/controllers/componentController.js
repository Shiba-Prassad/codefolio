const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/generateToken");
const User = require("../models/userModel");
const ComponentLevel1 = require("../models/componentLevel1Model");
const ComponentLevel2 = require("../models/componentLevel2Model");
const ComponentLevel3 = require("../models/componentLevel3Model");
const { ObjectId } = require("mongodb");
const Component = require("../models/componentModel");

const getComponentBasic = asyncHandler(async (req, res) => {
  const { token, level1, level2 } = req.body;
  let userId;
  if (token) {
    userId = await verifyToken(token);
  } else {
    const uData = await User.findOne({ isAdmin: true }, { _id: 1 });
    userId = uData._id;
  }
  const getData = await Component.findOne({ userId });
  if (getData) {
    res.status(200).json(getData);
  } else {
    res.status(501).json({ error: "Component Data not found." });
  }
});

const editComponentBasic = asyncHandler(async (req, res) => {
  const userId = await verifyToken(req.body.token);
  const componentHeading = req.body.componentHeading;
  const componentDescription = req.body.componentDescription;

  const getData = await Component.find({ userId });
  if (getData.length > 0) {
    const setData = await Component.findOneAndUpdate(
      { userId },
      { $set: { componentHeading, componentDescription } }
    );
    if (setData) {
      res.status(200).json(setData);
    } else {
      res.status(501).json({ error: "Component Data not updated." });
    }
  } else {
    const createData = await Component.create({
      userId,
      componentHeading,
      componentDescription,
    });
    if (createData) {
      res.status(200).json(createData);
    } else {
      res.status(501).json({ error: "Component Data not created." });
    }
  }
});

const createComponentList = asyncHandler(async (req, res) => {
  const {
    componentTitle,
    level1,
    level2,
    token,
    componentHeading,
    componentDescription,
  } = req.body;
  const componentUrl = componentTitle.trim().replace(/\s/g, "-").toLowerCase();
  if (token) {
    const _id = await verifyToken(token);
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(200).json({ error: "User not found. Please login." });
    } else {
      const checkComponent = level2
        ? await ComponentLevel3.find({
            componentTitle,
            userId: _id,
            componentId: level2,
          })
        : level1
        ? await ComponentLevel2.find({
            componentTitle,
            userId: _id,
            componentId: level1,
          })
        : await ComponentLevel1.find({ componentTitle, userId: _id });
      if (checkComponent.length > 0) {
        return res.status(501).json({
          error: "This Component Name is not available.Please try another.",
        });
      } else {
        const createComponent = level2
          ? await ComponentLevel3.create({
              componentTitle,
              componentId: level2,
              componentUrl: componentUrl,
              componentHeading,
              componentDescription,
              userId: _id,
            })
          : level1
          ? await ComponentLevel2.create({
              componentTitle,
              componentId: level1,
              componentUrl: componentUrl,
              componentHeading,
              componentDescription,
              userId: _id,
            })
          : await ComponentLevel1.create({
              componentTitle,
              componentUrl: componentUrl,
              componentHeading,
              componentDescription,
              userId: _id,
            });
        if (createComponent) {
          return res.status(200).json({
            ...createComponent,
            success: "Component Added Successfully",
          });
        } else {
          return res
            .status(400)
            .json({ error: "New Component couldn't be created. Try again." });
        }
      }
    }
  } else {
    return res
      .status(400)
      .json({ error: "You have not access. Please login." });
  }
});

const getComponentList = asyncHandler(async (req, res) => {
  const { token, level1, level2, level3 } = req.body;
  let userId;
  if (token) {
    userId = await verifyToken(token);
  } else {
    const uData = await User.findOne({ isAdmin: true }, { _id: 1 });
    userId = uData._id;
  }
  const componentList = await ComponentLevel1.aggregate([
    { $match: { userId: new ObjectId(userId) } },
    {
      $lookup: {
        from: "componentlevel2",
        localField: "_id",
        foreignField: "componentId",
        as: "componentlevel2s",
      },
    },
    {
      $unwind: {
        path: "$componentlevel2s",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "componentlevel3",
        localField: "componentlevel2s._id",
        foreignField: "componentId",
        as: "componentlevel2s.componentlevel3s",
      },
    },
    // {
    //   $unwind: {
    //     path: "$componentlevel2s.componentlevel3s",
    //     preserveNullAndEmptyArrays: true,
    //   },
    // },
    {
      $group: {
        _id: "$_id",
        componentTitle: { $first: "$componentTitle" },
        componentUrl: { $first: "$componentUrl" },
        componentActive: { $first: "$componentActive" },
        userId: { $first: "$userId" },
        componentHeading: { $first: "$componentHeading" },
        componentDescription: { $first: "$componentDescription" },
        componentlevel2s: { $push: "$componentlevel2s" },
      },
    },
    {
      $sort: { _id: 1 },
    },
    {
      $project: {
        _id: 1,
        componentTitle: 1,
        componentUrl: 1,
        componentActive: 1,
        userId: 1,
        componentHeading: 1,
        componentDescription: 1,
        componentlevel2s: {
          _id: 1,
          componentId: 1,
          componentTitle: 1,
          componentUrl: 1,
          componentActive: 1,
          userId: 1,
          componentHeading: 1,
          componentDescription: 1,
          componentlevel3s: {
            _id: 1,
            componentId: 1,
            componentTitle: 1,
            componentUrl: 1,
            componentActive: 1,
            userId: 1,
            componentHeading: 1,
            componentDescription: 1,
          },
        },
      },
    },
  ]).exec();

  if (componentList) {
    res.status(200).json(componentList);
  } else {
    res.status(501).json({ error: "Component List not found" });
  }
});

const getComponentDetails = asyncHandler(async (req, res) => {
  const { token, level1, level2, level3 } = req.body;
  let userId;
  if (token) {
    userId = await verifyToken(token);
  } else {
    const uData = await User.findOne({ isAdmin: true }, { _id: 1 });
    userId = uData._id;
  }

  let label1Id, label2Id;
  if (level1) {
    const labelData = await ComponentLevel1.findOne({
      userId,
      componentUrl: level1,
    });
    label1Id = labelData._id;
  }
  if (level2) {
    const labelData = await ComponentLevel2.findOne({
      userId,
      componentUrl: level2,
      componentId: label1Id,
    });
    label2Id = labelData._id;
  }

  const componentList = level3
    ? await ComponentLevel3.findOne({
        userId,
        componentUrl: level3,
        componentId: label2Id,
      })
    : level2
    ? await ComponentLevel2.findOne({
        userId,
        componentUrl: level2,
        componentId: label1Id,
      })
    : level1
    ? await ComponentLevel1.findOne({ userId, componentUrl: level1 })
    : "";

  if (componentList) {
    res.status(200).json(componentList);
  } else {
    res.status(501).json({ error: "Component List not found" });
  }
});

const updateComponentDetails = asyncHandler(async (req, res) => {
  const {
    _id,
    token,
    componentTitle,
    componentHeading,
    componentDescription,
    level1,
    level2,
    level3,
  } = req.body;
  const userId = await verifyToken(token);
  const componentList = level3
    ? await ComponentLevel3.findOneAndUpdate(
        { userId, componentUrl: level3, _id },
        {
          $set: {
            componentTitle,
            componentUrl: componentTitle
              .trim()
              .replace(/\s/g, "-")
              .toLowerCase(),
            componentHeading,
            componentDescription,
          },
        }
      )
    : level2
    ? await ComponentLevel2.findOneAndUpdate(
        { userId, componentUrl: level2, _id },
        {
          $set: {
            componentTitle,
            componentUrl: componentTitle
              .trim()
              .replace(/\s/g, "-")
              .toLowerCase(),
            componentHeading,
            componentDescription,
          },
        }
      )
    : level1
    ? await ComponentLevel1.findOneAndUpdate(
        { userId, componentUrl: level1, _id },
        {
          $set: {
            componentTitle,
            componentUrl: componentTitle
              .trim()
              .replace(/\s/g, "-")
              .toLowerCase(),
            componentHeading,
            componentDescription,
          },
        }
      )
    : "";

  if (componentList) {
    res.status(200).json(componentList);
  } else {
    res.status(501).json({ error: "Component List not found" });
  }
});

const deleteComponent = asyncHandler(async (req, res) => {
  const { token, level1, level2, level3 } = req.body;
  let userId;
  if (token) {
    userId = await verifyToken(token);
  } else {
    const uData = await User.findOne({ isAdmin: true }, { _id: 1 });
    userId = uData._id;
  }

  const componentList = level3
    ? await ComponentLevel3.findOne({ userId, componentUrl: level3 })
    : level2
    ? await ComponentLevel2.findOne({ userId, componentUrl: level2 })
    : level1
    ? await ComponentLevel1.findOne({ userId, componentUrl: level1 })
    : "";

  if (componentList) {
    res.status(200).json(componentList);
  } else {
    res.status(501).json({ error: "Component List not found" });
  }
});

module.exports = {
  getComponentList,
  getComponentBasic,
  editComponentBasic,
  getComponentDetails,
  updateComponentDetails,
  deleteComponent,
  createComponentList,
};
