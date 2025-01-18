import { configureStore } from "@reduxjs/toolkit";

import menu from '../features/components/ui/Burger/burgerSlice';
import sliderStory from '../features/components/SliderStory/sliderStorySlice';
import window from '../features/components/PopUpWindow/popUpWindowSlice';

const store = configureStore({
    reducer: {menu, sliderStory, window},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

