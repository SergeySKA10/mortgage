import { createSlice } from "@reduxjs/toolkit";

// изначальный state для слайдера
const initialState = {
    slidesStory: [
        {
            id: 'slide1',
            header: 'Get positioned',
            descr: 'Structure, pre-approval, gathering, put them into the position get the offer accepted.'
        },
        {
            id: 'slide2',
            header: 'Prep the offer',
            descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.'  
        },
        {
            id: 'slide3',
            header: 'Finalize Closing',
            descr: 'Put the final touches on from contract to close. Close the deal.'  
        },
        {
            id: 'slide4',
            header: 'Get positioned',
            descr: 'Structure, pre-approval, gathering, put them into the position get the offer accepted.'
        },
        {
            id: 'slide5',
            header: 'Prep the offer',
            descr: 'Terms of your offer, how quickly you can turn things around and who your lenders is advising.'  
        },
        {
            id: 'slide6',
            header: 'Finalize Closing',
            descr: 'Put the final touches on from contract to close. Close the deal.'  
        }
    ]
}

// createSlice
const sliderStorySlice = createSlice({
    name: 'sliderStory',
    initialState,
    reducers: {
        createSlide: (state, action) => {
            state.slidesStory.push(action.payload)
        }
    }
});

const {actions, reducer} = sliderStorySlice;

export default reducer;

export const { createSlide } = actions;
