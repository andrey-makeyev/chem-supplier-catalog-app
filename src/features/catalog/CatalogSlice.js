import {createSlice} from '@reduxjs/toolkit';

const catalogSlice = createSlice({
    name: 'catalogs',
    initialState: {
        catalogs: {},
    },
    reducers: {
        addCatalog: (state, action) => {
            const {supplierId, catalogData} = action.payload;
            if (!state.catalogs[supplierId]) {
                state.catalogs[supplierId] = [];
            }
            state.catalogs[supplierId] = catalogData;
        },
    },
});

export const {addCatalog} = catalogSlice.actions;
export default catalogSlice.reducer;
