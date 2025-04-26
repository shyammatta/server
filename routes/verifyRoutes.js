const express = require('express');
const router = express.Router(); // ✅ You forgot this line!

const villageCoordinates = {
    "komarthy": { lat: 18.3945, lon: 84.0154 },
    "LN puram": { lat: 16.2, lon: 80.7 },
    "Temple Alwal":{lat:17.4967,lon:78.5067}
  };
  
  router.post('/verify-location', (req, res) => {
    const { village, latitude, longitude } = req.body;
    const villageLoc = villageCoordinates[village];
    if (!villageLoc) return res.json({ allowed: false });
  
    const distance = Math.sqrt(
      Math.pow(latitude - villageLoc.lat, 2) + Math.pow(longitude - villageLoc.lon, 2)
    );
    const allowed = distance < 0.05; // ~5 km threshold
    res.json({ allowed });
  });
  module.exports = router; // ✅ THIS is super important
