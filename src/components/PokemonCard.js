import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height="140"
        image={pokemon.sprites.front_default}
      />
      <CardContent>
        <Typography variant="h6">#{pokemon.id}</Typography>
        <Typography variant="h5">{pokemon.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
