const mongoose = require('mongoose');

const mongoUri = "mongodb://0.0.0.0:27017/pratik";

const connectmongo = () => {
  mongoose.connect(mongoUri);

  // Connection events
  const db = mongoose.connection;

  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
};

module.exports = connectmongo;
