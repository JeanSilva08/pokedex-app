// pokemonService.js
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data); // Log the response
    return response.data.results; // Ensure you're returning the right data
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return []; // Return an empty array on error
  }
};
