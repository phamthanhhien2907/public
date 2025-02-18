const mongoose = require("mongoose");

const timerSchema = new mongoose.Schema({
  remainingTime: Number,
  isRunning: Boolean,
});

module.exports = mongoose.model("Timer", timerSchema);
