const express = require('express');
const multer = require('multer');
const Problem = require('../models/Problem');
const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

router.post('/upload', upload.single('video'), async (req, res) => {
  const { text, village } = req.body;
  const videoPath = req.file.path;

  await Problem.create({ text, videoPath, village });
  res.json({ message: 'Uploaded' });
});

module.exports = router;
