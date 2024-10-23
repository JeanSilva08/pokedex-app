// PokemonCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card sx={{
      margin: 2,
      width: '294px', 
      height: '423px', 
      backgroundColor: '#FFFFFF', 
      border: '1px solid #EDEDED', 
      borderRadius: '8px', 
      boxShadow: 3,
    }}>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height="294" 
        image={pokemon.sprites.front_default}
        sx={{ opacity: 1 }} 
      />
      <CardContent sx={{ backgroundColor: '#F1F1F1', height: '129px' }}> 
        <Typography variant="h6" sx={{ color: '#000000' }}> 
          #{pokemon.id}
        </Typography>
        <Typography variant="h5" sx={{ color: '#000000' }}> 
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;