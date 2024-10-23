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
  variant="outlined" // Use 'outlined' to achieve a border effect
  onClick={handleSearch}
  sx={{ 
    marginLeft: 2, 
    backgroundColor: '#FFFFFF', // White background
    color: '#0F62C1', // Blue text color
    border: '2px solid #0F62C1', // Thick blue border
    '&:hover': {
      backgroundColor: '#FFFFFF', // Keep background white on hover
      border: '2px solid #0F62C1', // Maintain blue border on hover
    }
  }}
>
  Buscar
</Button>

    </Box>
  );
};

export default SearchBar;