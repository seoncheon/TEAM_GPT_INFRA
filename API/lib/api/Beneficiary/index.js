var express = require('express');
var router = express.Router();

var add = require("./add");
var approve = require("./approve");
var pending = require("./pending");
var view = require("./view");
var delete2 = require("./delete");
var check = require("./check");

router.use("/add", add);
router.use("/approve", approve);
router.use("/pending", pending);
router.use("/view", view); // Give options on FE to see pending list as well
router.use("/delete", delete2);
router.use("/check", check);

module.exports = router;
