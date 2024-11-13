import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import theme from './theme';
import {ThemeProvider} from "@mui/material/styles";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <HomePage/>
        </ThemeProvider>
    );
}

export default App;
