import React, { useState } from 'react';
import { Box, Grid2 } from '@mui/material';
import axios from 'axios';
import SearchBar from './components/SearchBar'; // Import SearchBar
import PokemonCard from './components/PokemonCard'; // Import PokemonCard
import logo from './midea/logo.png'; // Import the logo

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  // This function handles the search operation
  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      setPokemonData(response.data);
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

      {/* Pokémon display */}
      <Grid2 container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
        {pokemonData && (
          <Grid2 item xs={12} sm={6} md={4}>
            <PokemonCard pokemon={pokemonData} /> {/* Use the PokemonCard component */}
          </Grid2>
        )}
      </Grid2>
    </div>
  );
}

export default App;
