const mongoose = require('mongoose');

const mongoUri = "mongodb+srv://pratik:95j9EK8q9txmQSBu@cluster0.hfq2sgw.mongodb.net/pratik";

const connectmongo = () => {
  mongoose.connect(mongoUri,{
        useNewUrlParser: true,
    useUnifiedTopology: true,
  });

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
