const mongoose = require('mongoose');

const commonProblemSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('CommonProblem', commonProblemSchema);
