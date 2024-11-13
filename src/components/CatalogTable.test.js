import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import CatalogTable from './CatalogTable';
import {addCatalog} from '../features/catalog/CatalogSlice';

const renderWithProvider = (component) => {
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

test('renders CatalogTable with infinite scroll and initial data', async () => {
    const mockData = Array.from({length: 100}, (_, index) => ({
        "Molport ID": `Molport-${index}`,
        "Supplier": `Supplier-${index}`,
        "SMILES": `C${index}H${index}`,
        "Sell Unit": `${index}g`,
        "Measure": `${index}mg`,
        "Price (USD)": `${index * 10}`,
        "Direct Shipping Time (Days)": `${index % 5 + 1}`,
        "Direct Shipping Price (USD)": `${index * 2}`,
    }));
    store.dispatch(addCatalog({supplierId: 1, catalogData: mockData}));

    renderWithProvider(<CatalogTable selectedSupplier={1}/>);

    expect(screen.getByText(/Molport-0/i)).toBeInTheDocument();
    expect(screen.getByText(/Molport-19/i)).toBeInTheDocument();

    fireEvent.scroll(window, {target: {scrollingElement: {scrollTop: 1000}}});

    setTimeout(() => {
        expect(screen.getByText(/Molport-20/i)).toBeInTheDocument();
        expect(screen.getByText(/Molport-39/i)).toBeInTheDocument();
    }, 600);
});
