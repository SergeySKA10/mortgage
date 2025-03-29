import { createSlice } from '@reduxjs/toolkit';
import { stateSliderStory } from './stateSliderStory';
import type { ISlideStory } from '@/shared/shared-components/componentsTypes';
import type { PayloadAction } from '@reduxjs/toolkit';

// изначальный state для слайдера
const initialState = stateSliderStory;

// createSlice
const sliderStorySlice = createSlice({
    name: 'sliderStory',
    initialState,
    reducers: {
        createSlide: (state, action: PayloadAction<ISlideStory>) => {
            state.slidesStory.push(action.payload);
        },
    },
});

const { actions, reducer } = sliderStorySlice;

export default reducer;

export const { createSlide } = actions;
