const express = require('express');
const app = express();
const db = require('./db');  // MongoDB Connection
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser');

app.use(bodyParser.json());  // req body
const PORT = process.env.PORT || 3000;

// Middleware Function
const logRequest = (req, res, next) => {
    // console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}

app.use(logRequest);

app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', { session: false });
app.get('/', function (req, res) {
    res.send('Welcome to our hotel');
})

// import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(PORT, () => {
    console.log('listening on port 3000');
})