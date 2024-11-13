import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import SupplierForm from './SupplierForm';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme';

const renderWithProviders = (component) => {
    return render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {component}
            </ThemeProvider>
        </Provider>
    );
};

test('renders SupplierForm with input fields', () => {
    renderWithProviders(<SupplierForm onSupplierSelect={jest.fn()}/>);

    fireEvent.click(screen.getByRole('button', {name: /Add New Supplier/i}));

    expect(screen.getByLabelText(/Supplier Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Website URL/i)).toBeInTheDocument();
});

test('adds new supplier on button click', () => {
    renderWithProviders(<SupplierForm onSupplierSelect={jest.fn()}/>);

    fireEvent.click(screen.getByRole('button', {name: /Add New Supplier/i}));

    fireEvent.change(screen.getByLabelText(/Supplier Name/i), {target: {value: 'Test Supplier'}});
    fireEvent.change(screen.getByLabelText(/Country/i), {target: {value: 'Test Country'}});
    fireEvent.change(screen.getByLabelText(/Website URL/i), {target: {value: 'https://molport.com'}});

    fireEvent.click(screen.getByText(/Save Supplier/i));

    expect(screen.getByText(/Supplier added successfully!/i)).toBeInTheDocument();
});

test('button has correct gradient background', () => {
    renderWithProviders(<SupplierForm onSupplierSelect={jest.fn()}/>);
    const button = screen.getByRole('button', {name: /Add New Supplier/i});

    expect(button).toHaveStyle(`background: ${theme.components.MuiButton.styleOverrides.root.backgroundImage}`);
});

test('shows validation error for invalid URL', () => {
    renderWithProviders(<SupplierForm onSupplierSelect={jest.fn()}/>);

    fireEvent.click(screen.getByRole('button', {name: /Add New Supplier/i}));

    const urlInput = screen.getByLabelText(/Website URL/i);
    fireEvent.change(urlInput, {target: {value: 'invalid-url'}});

    fireEvent.click(screen.getByText(/Save Supplier/i));

    expect(screen.getByText(/Please enter a valid URL/i)).toBeInTheDocument();
});
