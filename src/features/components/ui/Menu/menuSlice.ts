import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ILink } from '@/shared/shared-components/componentsTypes';

import { linksState } from './linksState';

// изначальный список ссылок
const initialState = linksState;

// создаем срез
const liksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        linkPageCreate: (state, action: PayloadAction<ILink>) => {
            state.linksOnPages.pages.push(action.payload);
        },
        // linkPageDelete: (state, action: PayloadAction<string>) => {
        //     state.linksOnPages = state.linksOnPages.pages.filter(el => el.id !== action.payload)
        // },
        // linkSectionCreate: (state, action: PayloadAction<ILink>) => {
        //     ...state,

        //     // state.linksOnSection.push(action.payload)
        // },
        // linkSectionDelete: (state, action: PayloadAction<string>) => {
        //     state.linksOnSection = state.linksOnSection.filter(el => el.id !== action.payload)
        // }
    },
});

const { actions, reducer } = liksSlice;

export default reducer;

export const {
    linkPageCreate,
    // linkPageDelete,
    // linkSectionCreate,
    // linkSectionDelete
} = actions;
