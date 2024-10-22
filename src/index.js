// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Change import
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import './index.css'; // If you have global styles

const theme = createTheme({
  palette: {
    background: {
      default: '#004d00', // Dark green background
    },
    text: {
      primary: '#fff', // White text
    },
  },
  typography: {
    fontFamily: 'YourGoogleFont, sans-serif', // Add your Google Font
  },
});

// Create a root for the React app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Use createRoot

// Render the App inside the ThemeProvider
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
