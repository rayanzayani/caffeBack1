var express = require("express");
let reservationRoute = express.Router();
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
reservationRoute.route("/reservation").get((req, res) => {
  res.render("reservation");
});

reservationRoute.route("/addReservation").post((req, res) => {});

module.exports = reservationRoute;
