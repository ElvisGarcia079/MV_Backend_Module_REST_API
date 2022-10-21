const express = require("express");
const { seed } = require("./data/index");
const {Pokemon} = require("./models/Pokemon");
const {Trainer} = require("./models/Trainer");

const app = express();
const port = 3011;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Verb
    // GET - SELECT - (Searching a Resource or Querying)
    // POST - INSERT - (Creating a Resource)
    // PUT - UPDATE - (Updating a Resource)
    // DELETE - DELETE - (Deleting a Resource)

// Noun
    // Pokemons
    // Trainers

// Thing #1 to note about Restful API Best Practices. 
// Your endpoints (the nouns) should be pluralized

// When you think of REQ.QUERY think of FILTERING
    // (The only thing it's used for is pagination)
app.get("/pokemons", async (req, res) => {
    // If you
    const {type} = req.query;
    let pokemon = await Pokemon.findAll({where: {type}});

    res.send(pokemon)
});

// We have been thinking about Object Oriented Programming since Week 5. 

// We learned that with OOP we have the four principles: 
    // 1. Inheritence
        // Objects have an IS A relationship

        // Pokemon IS A type -> /pokemons/types
        // Trainer IS A human -> "/humans/trainers"
        // Dog IS A animal -> "/animals/dogs"

    

// app.get("/pokemons/:id", async (req, res) => {
//     console.log(req.params.id)
//     let pokemon = await Pokemon.findByPk(req.params.id);
//     res.send(pokemon)
// });

app.listen(port, () => {
    seed();
    console.log(`App listening on http://localhost:${port}`);
});