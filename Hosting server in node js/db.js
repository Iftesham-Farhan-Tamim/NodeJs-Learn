const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB Connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels'
// const mongoURL = 'mongodb+srv://helloworld:qwerty123@cluster0.htezcpk.mongodb.net/'
const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB Server
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connect(mongoURL);

// mongoose.connect(mongoURL, {
//     tlsAllowInvalidCertificates: true
// });

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('✅ Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('⚠️ MongoDB disconnected');
});