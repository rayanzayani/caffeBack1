const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Create Schema
const ObjectId = mongoose.Types.ObjectId;

ObjectId.prototype.valueOf = function () {
  return this.toString();
};
const ReservationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cin: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  nbrPersonne: {
    type: Number,
    required: true,
  },
});
module.exports = Reservation = mongoose.model("reservation", ReservationSchema);
