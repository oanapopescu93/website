import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../utils/utils'

const initialState = {
    user: {
        uuid: getCookie("website_uuid") !== "" ? getCookie("website_uuid") : null,
        guest: getCookie("website_guest") !== "" ? getCookie("website_guest") : null
    },
}

const pageSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUser: (state, { payload }) => {
            if(payload.uuid){
                state.user.uuid = payload.uuid
                setCookie("website_uuid", payload.uuid)
            }
            if(typeof payload.guest !== "undefined" && payload.guest !== "null" && payload.guest !== "" && payload.guest !== null){
                state.user.guest = payload.guest
                setCookie("website_guest", payload.guest)
            }
        },
        resetAuth: () => initialState,
    }
})

export const {
    changeUser,
} = pageSlice.actions

export default pageSlice.reducer