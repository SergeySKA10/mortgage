import { createSlice } from '@reduxjs/toolkit';
import { stateSliderStory } from './stateSliderStory';
import type { ISlideStory } from '@/shared/shared-components/componentsTypes';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch } from '@/store/store';

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
        changeSlide: (state, action: PayloadAction<ISlideStory>) => {
            for (let i = 0; i < state.slidesStory.length; i++) {
                if (state.slidesStory[i].id === action.payload.id) {
                    state.slidesStory[i] = action.payload;
                }
            }
        },
        deleteSlide: (state, action: PayloadAction<string>) => {
            let findIndex = false;
            for (let i = 0; i < state.slidesStory.length; i++) {
                if (state.slidesStory[i].id === action.payload) {
                    if (i === state.slidesStory.length - 1) {
                        state.slidesStory.pop();
                    } else {
                        findIndex = true;
                        state.slidesStory[i] = state.slidesStory[i + 1];
                        continue;
                    }
                }

                if (findIndex) {
                    if (i === state.slidesStory.length - 1) {
                        break;
                    }
                    state.slidesStory[i] = state.slidesStory[i + 1];
                } else {
                    continue;
                }
            }
        },
    },
});

const {
    actions: { createSlide, changeSlide, deleteSlide },
    reducer,
} = sliderStorySlice;

export default reducer;

export const createNewSlideStory = (
    dispatch: AppDispatch,
    value: ISlideStory
) => {
    dispatch(createSlide(value));
};

export const changeSlideStory = (dispatch: AppDispatch, value: ISlideStory) => {
    dispatch(changeSlide(value));
};

export const deleteSlideStory = (dispatch: AppDispatch, id: string) => {
    dispatch(deleteSlide(id));
};
