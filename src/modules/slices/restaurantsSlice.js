import { createSlice } from '@reduxjs/toolkit';

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: [],
    reducers: {
        addRestaurant: (state, action) => {
            state.push(action.payload);
        },
        setRestaurants: (state, action) => action.payload,
    },
});

export const { addRestaurant, setRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
