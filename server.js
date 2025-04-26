const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const locationRoutes = require('./routes/locationRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const verifyRoutes = require('./routes/verifyRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', locationRoutes);
app.use('/api', uploadRoutes);
app.use('/api', verifyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
