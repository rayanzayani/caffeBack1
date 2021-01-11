var express = require("express");
var router = express.Router();
// const User = require("../models/User");
const saltRounds = 10;
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "C:/Users/Brain_Dev_02/Desktop/New_folder/new/mern/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });
// var upload = multer({ storage: storage });
/* GET home page. */
router.route("/index").get(function (req, res, next) {
  res.render("index");
});
router.route("/").get(function (req, res, next) {
  res.render("index");
});

module.exports = router;
