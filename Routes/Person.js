const express = require("express")
const router = express.Router()
const Person = require ("../Models/personModel.js")


router.get('/persons/Age', async (req, res) => {
    try {
      // Example of using built-in query chaining in Mongoose
      console.log("hello")
      const results = await Person.find()
        .where('Age').gte(18)  // Age greater than or equal to 18
        .sort({ name: 1 })     // Sort by name in ascending order
        .exec();               // Execute the query
        console.log(results)
  
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


router.post('/addPerson', async (req, res) => {
    try {
      const { Name, Age, Favoritefoods } = req.body;
      const savedPerson = await Person.create({  Name, Age, Favoritefoods  });
      res.status(201).json(savedPerson);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.post('/persons', async (req, res) => {
    try {
      const peopleArray = req.body;
      const savedPeople = await Person.insertMany(peopleArray);
      res.status(201).json(savedPeople);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  


router.get('/persons/:name', async (req, res) => {
    try {
      const  name  = req.params.name;
      const people = await Person.find({Name: name});
      res.status(200).json(people);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
        
    



router.get('/person/:food', async (req, res) => {
    try {
        const food = req.params.food;
        let person2 = null;  // Use 'let' to assign a person object
        
        const persons = await Person.find();  // Find all persons
        console.log(persons);

        // Loop through each person and check their favorite foods
        for (let i = 0; i < persons.length; i++) {
            for (let j = 0; j < persons[i].Favoritefoods.length; j++) {
                if (persons[i].Favoritefoods[j] === food) {
                    person2 = persons[i];  // Assign person if the food is found
                    break;  // Exit the loop once the person is found
                }
            }
            if (person2) break;  // Exit outer loop if person is found
        }

        // If no matching person is found, return a 404 response
        if (!person2) {
            return res.status(404).json({ error: 'Person not found' });
        }

        // Return the matched person
        res.status(200).json(person2);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});


  router.get('/person/:id', async (req, res) => {
    try {
      const personId = req.params.id;
      const person = await person.findById(personId);
      if (!person) return res.status(404).json({ error: 'Person not found' });
      res.status(200).json(person);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.put('/person/:id', async (req, res) => {
    try {
      const personId = req.params.id;
      const { favoriteFood } = req.body; 
      const updatedPerson = await Person.findByIdAndUpdate(personId,
        { $push: { Favoritefoods: favoriteFood } }, 
        { new: true }                         
      );
      
      if (!updatedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      
      res.status(200).json(updatedPerson);
    } catch (err) {
      
      res.status(500).json({ error: err.message });
    }
  });

  router.delete('/person/:id', async (req, res) => {
    try {
      const personId = req.params.id;
      const deletedPerson = await Person.findByIdAndDelete(personId);
      if (!deletedPerson) return res.status(404).json({ error: 'Person not found' });
      res.status(200).json({ message: 'Person deleted', deletedPerson });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.delete('/persons', async (req, res) => {
    try {
      const { name } = req.query;
      const result = await person.deleteMany(name);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });




  
module.exports = router
