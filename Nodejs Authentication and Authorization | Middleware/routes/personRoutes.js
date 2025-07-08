const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');  // Person Mongoose models

// Post route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body  // Assuming the request body contains the person task

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
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }
})

router.get('/:workType', async (req, res) => {  // tasteType is a variable
    try {
        const workType = req.params.workType;  // Extract the work type from the URL parameter
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;  // extract the id from the url parameter
        const updatedPersonData = req.body;  // updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,  // return the updated document
            runValidator: true,  // run mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;  // extract the person's id from the url parameter

        // assuming you have a person model
        const response = await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }

        console.log('data deleted');
        res.status(200).json({ message: 'person deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;