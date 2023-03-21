import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../pages/utils'

const initialState = {
    lang: getCookie("website_language") !== "" ? getCookie("website_language") : "ENG",
    visitor: getCookie('login_visitor') ? getCookie('login_visitor') : false,
    mode: getCookie("website_mode") === '' || getCookie("website_mode") === 'light' ? 'light' : 'dark',
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeLanguage: (state, { payload }) => {
            state.lang = payload
            setCookie("website_language", payload)
        },
        changeVisitor: (state, { payload }) => {
            state.visitor = payload
            setCookie("login_visitor", payload, 1)
        },
        changeMode: (state, { payload }) => {
            state.mode = payload
            setCookie("website_mode", payload)
        },
    }
})

export const {
    changeLanguage,
    changeVisitor,
    changeMode,
} = settingsSlice.actions

export default settingsSlice.reducer