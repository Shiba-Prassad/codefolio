const express = require("express");
const {
  getComponentList,
  getComponentBasic,
  editComponentBasic,
  // getComponentL2List,
  // getComponentL3List,
  createComponentList,
  // updateComponentList,
  deleteComponent,
  getComponentDetails,
  updateComponentDetails,
} = require("../controllers/componentController");

const router = express.Router();

router.route("/getComponentBasic").post(getComponentBasic);
router.route("/editComponentBasic").post(editComponentBasic);
router.route("/getComponentList").post(getComponentList);
router.route("/getComponentDetails").post(getComponentDetails);
router.route("/updateComponentDetails").post(updateComponentDetails);
// router.route("/component-l3").post(getComponentL3List);
router.route("/addComponentList").post(createComponentList);
// router.route("/updateComponentList").post(updateComponentList);
router.route("/deleteComponent").post(deleteComponent);

module.exports = router;
