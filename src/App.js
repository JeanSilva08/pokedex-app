import React, { useState } from 'react';
import { Grid2 } from '@mui/material';
import axios from 'axios';
import SearchBar from './components/SearchBar'; // Import SearchBar
import PokemonCard from './components/PokemonCard'; // Import PokemonCard
import logo from './midea/logo.png'; // Import the logo

function App() {
  // State to hold an array of previously searched Pokémon
  const [pokemonDataList, setPokemonDataList] = useState([]);
  // State to hold the current Pokémon being searched
  const [currentPokemon, setCurrentPokemon] = useState(null);

  // This function handles the search operation
  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      const newPokemon = response.data;

      // If there's already a current Pokémon, move it to the list
      if (currentPokemon) {
        setPokemonDataList((prevList) => [currentPokemon, ...prevList]);
      }

      // Update the current Pokémon state with the new Pokémon
      setCurrentPokemon(newPokemon);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(180deg, #008EB6 0%, #004816 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    }}>
      {/* Pokémon logo */}
      <img 
        src={logo} 
        alt="Pokémon Logo" 
        style={{ 
          width: '300px', 
          height: '145px', 
          opacity: '1',
          marginBottom: '20px',
        }} 
      />

      {/* SearchBar component */}
      <SearchBar onSearch={handleSearch} />

      {/* Display the current Pokémon card above the grid */}
      {currentPokemon && (
        <Grid2 container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
          <Grid2 item xs={12} sm={6} md={4} lg={3}>
            <PokemonCard pokemon={currentPokemon} />
          </Grid2>
        </Grid2>
      )}

      {/* Pokémon display in a 4x4 grid for previously searched Pokémon */}
      <Grid2 container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
        {pokemonDataList.map((pokemon, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
            <PokemonCard pokemon={pokemon} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default App;
