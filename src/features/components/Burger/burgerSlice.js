import { createSlice } from "@reduxjs/toolkit";

// изначальный state для меню
const initialState = {
    menu: 'close'
}

// создаем срез для формирования action и reducer 
const burgerSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuShowing: (state, action) => {
            state.menu = action.payload;
        }
    }
});

const {actions, reducer} = burgerSlice;

export default reducer;

export const { menuShowing } = actions;