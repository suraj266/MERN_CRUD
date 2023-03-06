const express = require('express');
const router = express.Router();
const Controller = require("../../controllers/user/user.controller.js");
const userAuth = require('../../middleware/User.middleware');
const userAdmin = require('../../middleware/userAdmin.middleware')

router.route("/Register").post(Controller.Register); // Register New User
router.route("/Login").post(Controller.Login); // Login user
router.route("/List").get(userAdmin, Controller.List); // Listing of users by Id and without Id both
router.route("/Update").put(userAdmin, Controller.Update); // Update user data
router.route("/Delete/:id").put(userAuth, Controller.Delete); // Delete (Soft Delete) user data

module.exports = router;


// Feture & Option
// multer
// cloudnary