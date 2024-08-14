import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contact: null,
    skills_title: null,
    skills: null,
    languages: null,
    education: null,
    experience: null,
    portofolio_list: null,
    portofolio_items: null,
    tutorials: null,
    loaded: false,
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        bringPayload: () => {},
        showPayload: (state, { payload }) => {
            state.contact = payload.contact
            state.skills_title = payload.skills_title
            state.skills = payload.skills
            state.languages = payload.languages
            state.education = payload.education
            state.experience = payload.experience
            state.portofolio_list = payload.portofolio_list
            state.portofolio_items = payload.portofolio_items
            state.tutorials = payload.tutorials
            state.loaded = true
        },
        resetHome: () => initialState,
    }
})

export const {
    bringPayload,
    showPayload,
    resetHome
} = homeSlice.actions

export default homeSlice.reducer