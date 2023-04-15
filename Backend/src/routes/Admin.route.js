const express = require('express');
const router = express.Router();
const Controller = require("../controllers/admin/AdminController");

router.route("/Register").post(Controller.Register);
router.route("/Login").post(Controller.Login);

module.exports = router;