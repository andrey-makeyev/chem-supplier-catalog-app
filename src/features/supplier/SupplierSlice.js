import {createSlice} from '@reduxjs/toolkit';

const supplierSlice = createSlice({
    name: 'suppliers',
    initialState: {
        suppliers: [
            {id: 1, name: 'ChemDiv, Inc.', country: 'United States', website: 'http://www.chemdiv.com/'},
            {
                id: 2,
                name: 'BIONET - Key Organics Ltd.',
                country: 'United Kingdom',
                website: 'http://www.keyorganics.net/'
            },
            {id: 3, name: 'AnalytiCon Discovery', country: 'Germany', website: 'http://www.ac-discovery.com/'},
        ],
    },
    reducers: {
        addSupplier: (state, action) => {
            state.suppliers.push(action.payload);
        },
    },
});

export const {addSupplier} = supplierSlice.actions;
export default supplierSlice.reducer;
