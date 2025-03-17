const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');  // Import the auth routes

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/social_media')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

// Use the auth routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
