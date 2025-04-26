const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  text: String,
  videoPath: String,
  village: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Problem', problemSchema);
