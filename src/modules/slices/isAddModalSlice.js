import {createSlice} from '@reduxjs/toolkit';

const isAddModalSlice = createSlice({
    name: 'isAddModal',
    initialState: false,
    reducers: {
        toggleModal : (state, action) => action.payload,
    },
});

export const {toggleModal} = isAddModalSlice.actions;
export default isAddModalSlice.reducer;