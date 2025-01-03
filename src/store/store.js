import { configureStore } from "@reduxjs/toolkit";

import menu from '../features/components/Burger/burgerSlice';
import sliderStory from '../features/components/SliderStory/sliderStorySlice';

const store = configureStore({
    reducer: {menu, sliderStory},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

