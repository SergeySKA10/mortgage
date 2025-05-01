import { createSlice } from '@reduxjs/toolkit';
import { reportInitialState } from './reportState';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IReport } from '@/shared/shared-components/componentsTypes';

const initialState = reportInitialState;

// createSlice
const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        createNote: (state, action: PayloadAction<IReport>) => {
            state.report.push(action.payload);
        },
        deleteNote: (state, action) => {
            state.report = state.report.filter(
                (el) => el.id !== action.payload
            );
        },
    },
});

const { actions, reducer } = reportSlice;

export default reducer;

export const { createNote, deleteNote } = actions;
