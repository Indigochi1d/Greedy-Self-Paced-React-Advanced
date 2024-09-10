import { createSlice } from '@reduxjs/toolkit';

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: [],
    reducers: {
        setRestaurants: (state, action) => action.payload,
    },
});

export const { setRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
