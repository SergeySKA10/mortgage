import { createSlice } from "@reduxjs/toolkit";

// изначальный список ссылок
const initialState = {
    linksOnPages: [
        {
            id: "blog",
            link: "/blog", 
            text: "Blog"
        },
        {
            id: "ebook",
            link: "/ebook", 
            text: "Ebook"
        },
        {
            id: "webinar",
            link: "/webinar",
            text: "Webinar"
        }
    ],
    linksOnSection: [
        {
            id: "getting",
            link: "getting", 
            text: "Your teachers"
        },
        {
            id: "story",
            link: "story", 
            text: "Your mortgage journey"
        },
        {
            id: "customers",
            link: "customers", 
            text: "What our customers say"
        }
    ]
}

// создаем срез
const liksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        linkPageCreate: (state, action) => {
            state.linksOnPages.push(action.payload)
        },
        linkPageDelete: (state, action) => {
            state.linksOnPages = state.linksOnPages.filter(el => el.id !== action.payload)
        },
        linkSectionCreate: (state, action) => {
            state.linksOnSection.push(action.payload)
        },
        linkSectionDelete: (state, action) => {
            state.linksOnSection = state.linksOnSection.filter(el => el.id !== action.payload)
        }
    }
});

const { actions, reducer } = liksSlice;

export default reducer;

export const {
    linkPageCreate,
    linkPageDelete,
    linkSectionCreate,
    linkSectionDelete
} = actions;