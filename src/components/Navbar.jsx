import React from 'react';
import {AppBar, Toolbar, Box, useTheme} from '@mui/material';
import molportLogo from '../assets/images/molport-logo.svg';

export default function Navbar() {
    const theme = useTheme();

    return (
        <AppBar position="sticky"
                sx={{backgroundColor: theme.palette.background.paper || '#F8F9FA', boxShadow: 'none'}}>
            <Toolbar>
                <Box component="a" href="/" sx={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
                    <Box component="img" src={molportLogo} alt="Molport Logo" sx={{height: 40, marginRight: 2}}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
