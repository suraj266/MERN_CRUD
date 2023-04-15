const express = require('express');
const router = express.Router();
const Controller = require("../controllers/user/User.controller");
const userAdmin = require('../middleware/userAdmin.middleware')

router.route("/Register").post(Controller.Register); // Register New User
router.route("/Login").post(Controller.Login); // Login user
router.route("/List").get(Controller.List); // Listing of users by Id and without Id both
router.route("/Update").put(userAdmin, Controller.Update); // Update user data
router.route("/Delete/:id").put(userAdmin, Controller.Delete); // Delete (Soft Delete) user data
router.route("/sendOTP").post(Controller.sendOTP); // Send OTP to Email
router.route("/verifyOtp").post(Controller.VerifyOtp); // Verify OTP 
router.route("/changePassword").post(Controller.changePassword); // Change Password on forgot Password by User

module.exports = router;



//////////// there are two types to create routes ////////////

//  1 -  router.get("/List", userAdmin, Controller.List);
//  2 -  router.route("/List").get(userAdmin, Controller.List);

//////////////////////////////////////////////////////////////
