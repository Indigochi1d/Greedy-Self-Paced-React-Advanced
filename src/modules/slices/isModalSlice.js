import {createSlice} from '@reduxjs/toolkit';

const isModalSlice = createSlice({
    name: 'isModal',
    initialState: {
        isOpen: false,
        restaurant:{
            name: "",
            description: "",
        }
    },
    reducers:{
        openModal: (state, action) => {
            state.isOpen = true;
            state.restaurant = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.restaurant = {
                name: "",
                description: "",
            };
        }
    }
});

export const {openModal,closeModal} = isModalSlice.actions;
export default isModalSlice.reducer;