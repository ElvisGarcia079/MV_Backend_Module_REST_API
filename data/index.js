const {database} = require('../db');
const {Pokemon, Trainer} = require('../models/index');
const {pokemon} = require("./pokemonData");
const {trainer} = require("./trainerData");

let seed = async () => {
    await database.sync({force:true});

        // Create the entries for them in their Models
    let pokemonEntries = await Pokemon.bulkCreate(pokemon);
    let trainerEntries = await Trainer.bulkCreate(trainer);

    let firstPokemon = await pokemonEntries[0];
    let secondTrainer = await trainerEntries[1];

    console.log("Test 1: ", firstPokemon);
    console.log("Test 2: ", secondTrainer);

    console.log("The database is populated... Test it out using a Local Server!")
}

module.exports = {
    seed
}





