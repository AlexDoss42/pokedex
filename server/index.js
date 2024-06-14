const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('https://pokeapi.co/api/v2/pokemon/:pokemon_name', async (req, res) => {
    try {
        const {pokemon_name} = req.params;
    } catch {
        
    }
})