// PokemonCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card sx={{
      margin: 2,
      width: '294px', // Set width as per your requirement
      height: '423px', // Total height = image height (294) + content height (129)
      backgroundColor: '#FFFFFF', // Background color
      border: '1px solid #EDEDED', // Border color
      borderRadius: '8px', // Optional rounded corners
      boxShadow: 3,
    }}>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height="294" // Set height to 294px
        image={pokemon.sprites.front_default}
        sx={{ opacity: 1 }} // Make sure opacity is set to 1
      />
      <CardContent sx={{ backgroundColor: '#F1F1F1', height: '129px' }}> {/* Content background color */}
        <Typography variant="h6" sx={{ color: '#000000' }}> {/* Change text color to black */}
          #{pokemon.id}
        </Typography>
        <Typography variant="h5" sx={{ color: '#000000' }}> {/* Change text color to black */}
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
