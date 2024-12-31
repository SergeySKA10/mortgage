import { createSlice } from "@reduxjs/toolkit";

// объект с состоянием активности меню
export const menuActive = {
    open: 'open', 
    close: 'close'
}

// изначальный state для демонстрации состояния меню
const initialState = {
    menu: menuActive.close
}

// создаем срез для формирования action и reducer 
const burgerSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuOpen: (state, action) => {
            state.menu = action.payload;
        }
    }
});

const {actions, reducer} = burgerSlice;
const { menuOpen } = actions;

export default reducer;

export const openMenu = () => menuOpen(menuActive.open);
export const closeMenu = () => menuOpen(menuActive.close);