import React from 'react';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import CatalogUpload from './CatalogUpload';

const renderWithProvider = (component) => {
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

test('renders CatalogUpload with select options', () => {
    renderWithProvider(<CatalogUpload selectedSupplier={1}/>);
    expect(screen.getByText(/Select Catalog File/i)).toBeInTheDocument();
});

test('loads data when Load Catalog button is clicked', async () => {
    renderWithProvider(<CatalogUpload selectedSupplier={1}/>);

    const selectElement = screen.getByRole('combobox');
    fireEvent.mouseDown(selectElement);

    const menuItem = await screen.findByRole('option', {name: /AnalytiCon Discovery - a Division of BRAIN Biotech AG/i});
    fireEvent.click(menuItem);

    expect(selectElement).toHaveTextContent(/AnalytiCon Discovery - a Division of BRAIN Biotech AG/i);

    const loadButton = screen.getByRole('button', {name: /Load Catalog/i});
    fireEvent.click(loadButton);

    await waitFor(() => screen.getByRole('progressbar'));
    await waitFor(() => {
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
});
