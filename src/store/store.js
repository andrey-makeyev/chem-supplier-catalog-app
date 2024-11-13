import {configureStore} from '@reduxjs/toolkit';
import supplierReducer from '../features/supplier/SupplierSlice';
import catalogReducer from '../features/catalog/CatalogSlice';

export const store = configureStore({
    reducer: {
        suppliers: supplierReducer,
        catalogs: catalogReducer,
    },
});
