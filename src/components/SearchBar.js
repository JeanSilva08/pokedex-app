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
        width: '582px',
        height: '100px',
        border: '1px solid #0F62C1', // Border styling
        gap: '0px',
        opacity: '1', // Set to 1 to make it visible
        padding: '0 16px', // Add padding for inner alignment
      }}
    >
      <TextField
        label="Pesquisar"
        placeholder="Digite o nome ou número"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // Change to onKeyDown
        sx={{
          flex: 1, // Allow TextField to take available space
          opacity: '1', // Ensure visibility
          border: 'none', // Remove default border
        }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{ 
          marginLeft: 2, 
          backgroundColor: '#4caf50' 
        }}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
