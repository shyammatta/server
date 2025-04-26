const express = require('express');
const router = express.Router(); // ✅ You forgot this line!

const villageCoordinates = {
    "komarthy": { lat: 18.3945, lon: 84.0154 },
    "LN puram": { lat: 16.2, lon: 80.7 },
    "Temple Alwal":{lat:17.4967,lon:78.5067}
  };
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c; // Distance in km
  return distance;
}
  
  router.post('/verify-location', (req, res) => {
    const { village, latitude, longitude } = req.body;
    const villageLoc = villageCoordinates[village];
    if (!villageLoc) return res.json({ allowed: false });
  
      const distance = getDistanceFromLatLonInKm(latitude, longitude, villageLoc.lat, villageLoc.lon);
        console.log(`Distance from village: ${distance} km`);


    const allowed = distance < 5; // ~5 km threshold
    res.json({ allowed });
  });
  module.exports = router; // ✅ THIS is super important
