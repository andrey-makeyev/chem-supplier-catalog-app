import {render, screen} from '@testing-library/react';
import App from './App';
import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'react-redux';
import {store} from './store/store';
import theme from './theme';

test('renders Navbar and HomePage', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    );

    const logoElement = screen.getByAltText(/Molport Logo/i);
    expect(logoElement).toBeInTheDocument();

    const homePageElement = screen.getByText(/Supplier and Catalog Management/i);
    expect(homePageElement).toBeInTheDocument();
});
