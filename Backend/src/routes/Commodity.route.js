const express = require('express');
const router = express.Router();
const Controller = require("../controllers/commodity/Commodity");

router.route("/commodity").post(Controller.Commodity);

module.exports = router;