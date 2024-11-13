import React from 'react';
import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme';

const renderWithThemeProvider = (component) => {
    return render(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    );
};

test('renders Navbar with logo', () => {
    renderWithThemeProvider(<Navbar/>);
    const logo = screen.getByAltText(/Molport Logo/i);
    expect(logo).toBeInTheDocument();
});

test('navbar has correct background color', () => {
    renderWithThemeProvider(<Navbar/>);
    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveStyle(`background-color: ${theme.palette.background.paper}`);
});
