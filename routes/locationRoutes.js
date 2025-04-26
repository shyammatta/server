// server/routes/locationRoutes.js
const express = require('express');
const router = express.Router();

const states = ['Andhra Pradesh', 'Telangana'];
const districtsMap = {
  'Andhra Pradesh': ['Srikakulam', 'Krishna'],
  'Telangana': ['Hyderabad', 'Warangal']
};
const mandalsMap = {
  'Srikakulam': ['Narasannapeta', 'Tenali'],
  'Hyderabad': ['Bolarum','Ameerpet', 'Madhapur']
};
const villagesMap = {
  'Narasannapeta': ['Komarthy', 'LN puram'],
  'Ameerpet': ['VillageA', 'VillageB'],
  'Bolarum':['Temple Alwal','old Alwal']

};

router.get('/states', (req, res) => {
  res.json(states);
});

router.get('/districts/:state', (req, res) => {
  const { state } = req.params;
  res.json(districtsMap[state] || []);
});

router.get('/mandals/:district', (req, res) => {
  const { district } = req.params;
  res.json(mandalsMap[district] || []);
});

router.get('/villages/:mandal', (req, res) => {
  const { mandal } = req.params;
  res.json(villagesMap[mandal] || []);
});
// Get all common problems
router.get('/common-problems', async (req, res) => {
  try {
    const problems = await CommonProblem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all videos
router.get('/common-videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = router;
