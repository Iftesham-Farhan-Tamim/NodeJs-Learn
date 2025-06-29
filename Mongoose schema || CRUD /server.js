const express = require('express');
const app = express();
const db = require('./db');  // MongoDB Connection

const bodyParser = require('body-parser');

app.use(bodyParser.json());  // req body

const Person = require('./models/Person');  // Person Mongoose models
const MenuItem = require('./models/MenuItem');  // MenuItem Mongoose models

app.get('/', function (req, res) {
    res.send('welcome to my hotel... how can i help you');
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
app.post('/person', async (req, res) => {
    try {
        const data = req.body

        // Create a new person document using the Mongoose model
        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


// GET method to get the person
app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})