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

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch(); // Call handleSearch on Enter key press
      }
    };

    return (
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <TextField
          label="Pesquisar"
          placeholder="Digite o nome ou número"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // Add key press handler
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          style={{ marginLeft: '10px' }}
        >
          Buscar
        </Button>
      </Box>
    );
};

export default SearchBar;
