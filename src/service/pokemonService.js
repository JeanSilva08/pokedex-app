import axios from 'axios';

// Function to fetch Pokémon data from the API
export const fetchPokemonData = async (searchTerm) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    console.log(response); // Log the response to check if data is being fetched correctly
    return response.data;  // Return the data
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return null;
  }
};
