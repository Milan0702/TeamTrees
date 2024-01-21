// server.js (Node.js backend)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Configure CORS middleware to allow cross-origin requests
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TeamTrees', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose model for leaderboard entries
const leaderboardEntrySchema = new mongoose.Schema({
  name: String,
  amount: Number,
  comment: String,
});

const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardEntrySchema);

// Define a route to fetch leaderboard data
app.get('/leaderboard', async (req, res) => {
  try {
    // Fetch leaderboard entries from the database
    const leaderboardData = await LeaderboardEntry.find();
    res.json(leaderboardData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
