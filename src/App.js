import React, { useState } from 'react';
import { Box, TextField, Button, Grid2, Card, CardContent, Typography, CardMedia } from '@mui/material';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  return (
    <div>
      {/* Search bar and button */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, padding: 2 }}>
        <TextField 
          label="Search Pokémon" 
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button 
          variant="contained" 
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* Pokémon display */}
      <Grid2 container spacing={3} justifyContent="center">
        {pokemonData && (
          <Grid2 item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={pokemonData.sprites?.front_default}
                alt={pokemonData.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  #{pokemonData.id}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        )}
      </Grid2>
    </div>
  );
}

export default App; // Ensure default export
