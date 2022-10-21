const express = require("express");
const {Pokemon} = require("./models/Pokemon");
const {Trainer} = require("./models/Trainer");
const {seed} = require("./seed/index")

const app = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/pokemons", async (req, res) => {
    let pokemon = await Pokemon.findAll();
    // console.log("This is the Query Object Passed in: " , req.query);
    
    res.send(pokemon);
})

app.get("/trainers", async (req, res) => {
    let trainer = await Trainer.findAll();
    res.send(trainer);
})

app.listen(port, () => {
    seed();
    console.log(`App listening on http://localhost:${port}`);
});