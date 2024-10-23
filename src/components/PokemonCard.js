import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card 
      sx={{
        margin: 2,
        width: { xs: '100%', sm: '294px' }, // Full width on mobile, fixed size on larger screens
        height: { xs: 'auto', sm: '423px' }, // Height adapts on smaller screens
        backgroundColor: '#FFFFFF', 
        border: '1px solid #EDEDED', 
        borderRadius: '8px', 
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        alt={pokemon.name}
        height={{ xs: '200px', sm: '294px' }} // Adjust image size for mobile
        image={pokemon.sprites.front_default}
        sx={{ opacity: 1 }}
      />
      <CardContent 
        sx={{ 
          backgroundColor: '#F1F1F1', 
          height: { xs: '100px', sm: '129px' }, // Content area adjusts height 
        }}
      >
        <Typography variant="h6" sx={{ color: '#000000' }}>
          #{pokemon.id}
        </Typography>
        <Typography variant="h5" sx={{ color: '#000000', fontSize: { xs: '16px', sm: '24px' } }}> 
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
