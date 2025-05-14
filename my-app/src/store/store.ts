import { configureStore } from '@reduxjs/toolkit';

import menu from '../features/components/ui/Burger/burgerSlice';
import sliderStory from '../features/components/ui/SliderStory/sliderStorySlice';
import window from '../features/components/ui/PopUpWindow/popUpWindowSlice';
import links from '../features/components/ui/Menu/menuSlice';
import report from '../features/components/Report/reportSlice';
import sidenav from '../app/dashboard/navigationBar/sideNavSlice';

export const makeStore = () => {
    return configureStore({
        reducer: { menu, links, sliderStory, window, report, sidenav },
        devTools: process.env.NODE_ENV !== 'production',
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
