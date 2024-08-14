import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../utils/utils'

const initialState = {
    lang: getCookie("website_language") !== "" ? getCookie("website_language") : "ENG",
    mode: getCookie("website_mode") !== "" ? getCookie("website_mode") : "light",
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeLanguage: (state, { payload }) => {
            state.lang = payload
            setCookie("website_language", payload)
        },
        changeMode: (state, { payload }) => {
            state.mode = payload
            setCookie("website_mode", payload)
        },
    }
})

export const {
    changeLanguage,
    changeMode
} = settingsSlice.actions

export default settingsSlice.reducer