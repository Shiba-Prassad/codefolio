const express = require("express");
const {
  getUserServiceData,
  createUserServiceData,
  updateUserServiceData,
  deleteUserServiceData,
  getServiceInfo,
  getServiceQnA,
  createServiceQnAData,
  updateServiceQnAData,
  deleteServiceQnAData,
} = require("../controllers/userServiceController");
const router = express.Router();

router.route("/details/:token").get(getUserServiceData);
router.route("/info/:_id").get(getServiceInfo);
router.route("/getQnA/:serviceId").get(getServiceQnA);
router.route("/createQnA").post(createServiceQnAData);
router.route("/updateQnA").post(updateServiceQnAData);
router.route("/deleteQnA").post(deleteServiceQnAData);
router.route("/create").post(createUserServiceData);
router.route("/update").post(updateUserServiceData);
router.route("/delete").post(deleteUserServiceData);

module.exports = router;
