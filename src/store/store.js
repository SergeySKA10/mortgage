import { configureStore } from "@reduxjs/toolkit";

import menu from '../features/components/ui/Burger/burgerSlice';
import sliderStory from '../features/components/ui/SliderStory/sliderStorySlice';
import window from '../features/components/ui/PopUpWindow/popUpWindowSlice';
import links from '../features/components/ui/Menu/menuSlice';
import report from '../features/components/Report/reportSlice';

const store = configureStore({
    reducer: {menu, links, sliderStory, window, report},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

