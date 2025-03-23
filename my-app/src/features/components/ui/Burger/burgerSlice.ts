import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch } from '@/store/store';

type menuActive = 'close' | 'open';
interface State {
    menu: menuActive;
}

// изначальный state для демонстрации состояния меню
const initialState = {
    menu: 'close',
} satisfies State as State;

// создаем срез для формирования action и reducer
const burgerSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuOpen: (state, action: PayloadAction<menuActive>) => {
            state.menu = action.payload;
        },
    },
});

const { actions, reducer } = burgerSlice;
const { menuOpen } = actions;

export default reducer;

// функция для состояния показа меню на 'открыто'
export const openMenu = (dispatch: AppDispatch) => {
    document.body.style.overflow = 'hidden';
    dispatch(menuOpen('open'));
};

// функция для изменения состояния показа меню на 'скрыто'
export const closeMenu = (dispatch: AppDispatch) => {
    document.body.style.overflow = '';
    dispatch(menuOpen('close'));
};
