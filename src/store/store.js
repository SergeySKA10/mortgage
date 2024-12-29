import { configureStore } from "@reduxjs/toolkit";

import reducer from "../reducers/reducer";
import menu from '../features/components/Burger/burgerSlice';

const store = configureStore({
    reducer: {reducer, menu},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

