const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('pokemon/:pokemon_name', async (req, res) => {
    try {
        const {pokemon_name} = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        const pokemon = response.data;


        res.render('pokemon', pokemon);

    } catch(e) {
        res.send(404).render('error', {message: "Pokemon not found!"})
    }
});

const PORT = 3030;
app.listen(PORT, () => {console.log(`I CHOOSE YOU ${PORT}`)});