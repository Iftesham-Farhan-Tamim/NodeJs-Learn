const express = require('express');
const app = express();
const db = require('./db');  // MongoDB Connection
require('dotenv').config();

const bodyParser = require('body-parser');

app.use(bodyParser.json());  // req body
const PORT = process.env.PORT || 3000;

// const Person = require('./models/Person');  // Person Mongoose models
// const MenuItem = require('./models/MenuItem');  // MenuItem Mongoose models

app.get('/', function (req, res) {
    res.send('welcome to our hotel');
})


// POST route to add a person [Callback version]
// app.post('/person', (req, res) => {
//     const data = req.body  // Assuming the request body contains the person data

//     // Create a new Person document using the Mongoose model
//     const newPerson = new Person(data);

//     // Save the new person to the database
//     newPerson.save((error, savedPerson) => {
//         if(error) {
//             console.log('Error saving person:', error);
//             res.status(500).json({error: 'Internal server error'});
//         } else {
//             console.log('data saved successfully');
//             res.status(200).json(savedPerson);
//         }
//     })
// })


// This is the Best Practice / Industry Standard [Async/Await version]
// POST method to get the person
// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body

//         // Create a new person document using the Mongoose model
//         const newPerson = new Person(data);

//         // Save the new person to the database
//         const response = await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })


// GET method to get the person
// app.get('/person', async (req, res) => {
//     try {
//         const data = await Person.find();
//         console.log('data fetched');
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server error' });
//     }
// })


// app.get('/person/:workType', async (req, res) => {  // workType is a variable
//     try {
//         const workType = req.params.workType;  // Extract the work type from the URL parameter
//         if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
//             const response = await Person.find({ work: workType });
//             console.log('response fetched');
//             res.status(200).json(response);
//         } else {
//             res.status(404).json({ error: 'Invalid work type' });
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })


// POST Method to add a Menu Item
// app.post('/menu', async (req, res) => {
//     try {
//         const data = req.body;
//         const newMenu = new MenuItem(data);
//         const response = await newMenu.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     } catch {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })


// // Get Method to get the Menu Item
// app.get('/menu', async (req, res) => {
//     try {
//         const data = await MenuItem.find();
//         console.log('data fetched');
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })


// import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(PORT, () => {
    console.log('listening on port 3000');
})