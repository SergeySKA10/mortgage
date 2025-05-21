import { createSlice } from '@reduxjs/toolkit';
import type { DashboardInitialState } from '@/shared/shared-components/dashboardTypes';
import type { KeyQuery } from '@/shared/shared-components/dashboardTypes';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch } from '@/store/store';

const initialState: DashboardInitialState = {
    popup: '',
    query: 'articles',
    action: 'create',
    idItem: 0,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        showPopup: (
            state,
            action: PayloadAction<DashboardInitialState['popup']>
        ) => {
            state.popup = action.payload;
        },
        setQuery: (state, action: PayloadAction<KeyQuery>) => {
            state.query = action.payload;
        },
        setAction: (
            state,
            action: PayloadAction<DashboardInitialState['action']>
        ) => {
            state.action = action.payload;
        },
        setIdItem: (state, action: PayloadAction<number>) => {
            state.idItem = action.payload;
        },
    },
});

const { actions, reducer } = dashboardSlice;

export default reducer;

const { showPopup, setQuery, setAction, setIdItem } = actions;

export const openPopup = (dispatch: AppDispatch) => {
    dispatch(showPopup('popup-active'));
};

export const hidePopup = (dispatch: AppDispatch) => {
    dispatch(showPopup(''));
};

export const setStateQuery = (dispatch: AppDispatch, key: KeyQuery) => {
    dispatch(setQuery(key));
};

export const setStateAction = (
    dispatch: AppDispatch,
    value: DashboardInitialState['action']
) => {
    dispatch(setAction(value));
};

export const setID = (dispatch: AppDispatch, value: number) => {
    dispatch(setIdItem(value));
};
