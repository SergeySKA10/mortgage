import { createSlice } from '@reduxjs/toolkit';
import { listItmesState } from './listItemState';
import type { IItmeState } from '@/shared/shared-components/dashboardTypes';
import type { PayloadAction } from '@reduxjs/toolkit';

// изначальный state списка
const initialState = listItmesState;

// createSlice
const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState,
    reducers: {
        createDBItem: (state, action: PayloadAction<IItmeState>) => {
            state.dbList.push(action.payload);
        },
        createStoreItem: (state, action: PayloadAction<IItmeState>) => {
            state.storeList.push(action.payload);
        },
        createRequestItem: (state, action: PayloadAction<IItmeState>) => {
            state.requestList.push(action.payload);
        },
    },
});

const { actions, reducer } = sideNavSlice;

export default reducer;

export const { createDBItem, createStoreItem, createRequestItem } = actions;
