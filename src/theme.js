import {createTheme} from '@mui/material/styles';
import colors from './assets/colors';
import gradients from './assets/gradients';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
            contrastText: colors.secondary,
        },
        secondary: {
            main: colors.secondary,
        },
        success: {
            main: colors.success,
        },
        info: {
            main: colors.info,
        },
        warning: {
            main: colors.warning,
        },
        error: {
            main: colors.danger,
        },
        background: {
            default: colors.neutral,
            paper: colors.light,
        },
        text: {
            primary: colors.secondary,
            secondary: colors.navLinks,
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        h1: {
            fontSize: '3rem',
            lineHeight: 1.2,
            fontWeight: 500,
            color: colors.secondary,
        },
        h2: {
            fontSize: '2.5rem',
            lineHeight: 1.2,
            fontWeight: 500,
            color: colors.secondary,
        },
        h3: {
            fontSize: '2rem',
            lineHeight: 1.3,
            fontWeight: 500,
            color: colors.secondary,
        },
        h4: {
            fontSize: '1.5rem',
            lineHeight: 1.4,
            fontWeight: 500,
            color: colors.secondary,
        },
        h5: {
            fontSize: '1.25rem',
            lineHeight: 1.4,
            fontWeight: 500,
            color: colors.secondary,
        },
        h6: {
            fontSize: '1rem',
            lineHeight: 1.5,
            fontWeight: 500,
            color: colors.secondary,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
            color: colors.secondary,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
            color: colors.navLinks,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
            color: colors.primary,
        },
    },
    shape: {
        borderRadius: 4,
    },
    shadows: [
        'none',
        '0px 2px 4px rgba(0, 0, 0, 0.1)',
        '0px 4px 8px rgba(0, 0, 0, 0.1)',
        '0px 8px 16px rgba(0, 0, 0, 0.1)',
        '0px 16px 32px rgba(0, 0, 0, 0.1)',
        '0px 2px 4px rgba(0, 0, 0, 0.2)',
        '0px 4px 8px rgba(0, 0, 0, 0.2)',
        '0px 8px 16px rgba(0, 0, 0, 0.2)',
        '0px 16px 32px rgba(0, 0, 0, 0.2)',
    ],
    spacing: 4,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '8px 16px',
                    backgroundImage: gradients.pinkToWhite,
                    '&:hover': {
                        backgroundImage: gradients.yellowToWhite,
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: 'inherit',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.primary,
                    '& th': {
                        color: colors.secondary,
                        fontWeight: 'bold',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: 16,
                    borderRadius: 8,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
});

export default theme;
