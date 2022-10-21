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
    let secondPokemon = await pokemonEntries[1];
    let thirdPokemon = await pokemonEntries[2];
    let fourthPokemon = await pokemonEntries[3];
    let firstTrainer = await trainerEntries[0];
    let secondTrainer = await trainerEntries[1];
    let firstPokemonName = await firstPokemon.pokemon_name;
    let secondTrainerName = await secondTrainer.first_name;

    console.log("Test 1: ", firstPokemonName);
    console.log("Test 2: ", secondTrainerName);

    await firstTrainer.addPokemon(firstPokemon);
    await firstTrainer.addPokemon(thirdPokemon);
    await secondTrainer.addPokemon(secondPokemon);
    await secondTrainer.addPokemon(fourthPokemon);

    let firstTrainerPokemons = await firstTrainer.getPokemons();
    console.log("The First Trainers Pokemon: ", firstTrainerPokemons);

    console.log("The database is populated... Test it out using a Local Server!")


}

module.exports = {
    seed
}





