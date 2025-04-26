const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  filename: String,
});

module.exports = mongoose.model('Video', videoSchema);
