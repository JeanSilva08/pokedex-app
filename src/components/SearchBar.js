import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm) {
      onSearch(searchTerm); // Pass the search term to the parent component for API call
      setSearchTerm(''); // Clear the search term after searching
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Call handleSearch on Enter key press
    }
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      mb={4}
      sx={{
        width: { xs: '100%', sm: '582px' }, // Full width on mobile, fixed width on larger screens
        height: 'auto',
        gap: '0px',
        padding: '0 16px',
      }}
    >
      <TextField
        label="Pesquisar"
        placeholder="Digite o nome ou número do Pokémon"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          flex: 1,
          fontSize: { xs: '14px', sm: '16px' }, // Smaller font for mobile
        }}
      />
      <Button
        variant="outlined"
        onClick={handleSearch}
        sx={{ 
          marginLeft: 2, 
          backgroundColor: '#FFFFFF',
          color: '#0F62C1',
          border: '2px solid #0F62C1',
          fontSize: { xs: '12px', sm: '16px' }, // Adjust button text size
          '&:hover': {
            backgroundColor: '#FFFFFF',
            border: '2px solid #0F62C1',
          }
        }}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
