import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IStatePopUp } from '@/shared/shared-components/componentsTypes';
import type { AppDispatch } from '@/store/store';

// изначальный state для состояния окна
const initialState: IStatePopUp = {
    popUpWindow: 'hide',
};

// создаем срез для формирования action и reducer
const popUpWindowSlice = createSlice({
    name: 'popUpWindow',
    initialState,
    reducers: {
        windowShow: (
            state,
            action: PayloadAction<IStatePopUp['popUpWindow']>
        ) => {
            state.popUpWindow = action.payload;
        },
    },
});

const { reducer, actions } = popUpWindowSlice;
const { windowShow } = actions;

export default reducer;

// функция изменения состояния демонстрации окна
export const showWindow = (dispatch: AppDispatch) => {
    dispatch(windowShow('popUpActive'));
};
