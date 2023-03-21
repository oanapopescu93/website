import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../pages/utils'

const initialState = {
    lang: getCookie("website_language") !== "" ? getCookie("website_language") : "ENG",
    visitor: getCookie('login_visitor') ? getCookie('login_visitor') : false
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
            console.log('changeVisitor ', payload)
            state.visitor = payload
            setCookie("login_visitor", payload, 1)
        },
    }
})

export const {
    changeLanguage,
    changeVisitor,
} = settingsSlice.actions

export default settingsSlice.reducer