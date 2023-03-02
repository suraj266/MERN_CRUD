const express = require('express');
const router = express.Router();
const Controller = require("../../controllers/user/user.controller.js");
const userAuth = require('../../middleware/User.middleware');

router.route("/Register").post(Controller.Register);
router.route("/Login").get(Controller.Login);
router.route("/List").get(userAuth, Controller.List);

module.exports = router;