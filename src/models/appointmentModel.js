const mongoose = require("mongoose");
const Slot = require("./slotModel");

const appointmentSchema = new mongoose.Schema(
  {
    slot: {
      type: mongoose.ObjectId,
      ref: "subSlot",
    },
    user: {
      type: mongoose.ObjectId,
      ref: "User",
    },
    appointmentDate: Date,
    status: {
      type: String,
      enum: ["Cancelled", "Approved", "Completed"],
      default: "Approved",
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
