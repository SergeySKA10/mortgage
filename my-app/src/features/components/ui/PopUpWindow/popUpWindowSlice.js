// import { createSlice } from "@reduxjs/toolkit";

// // объект с состоянием активности окна
// export const windowActive = {
//     show: 'popUpActive',
//     hide: 'hide'
// }

// // изначальный state для состояния окна
// const initialState = {
//     popUpWindow: windowActive.hide
// }

// // создаем срез для формирования action и reducer
// const popUpWindowSlice = createSlice({
//     name: 'popUpWindow',
//     initialState,
//     reducers: {
//         windowShow: (state, action) => {
//             state.popUpWindow = action.payload
//         }
//     }
// });

// const {reducer, actions} = popUpWindowSlice;
// const {windowShow} = actions;

// export default reducer;

// // функция изменения состояния демонстрации окна
// export const showWindow = (dispatch) => {
//     dispatch(windowShow(windowActive.show));
// };
