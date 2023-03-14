import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    title: "",
    template: "",
}

const popupsSlice = createSlice({
    name: 'popups',
    initialState,
    reducers: {
        changePopup: (state, { payload }) => {
            state.open = payload.open
            state.title = payload.title
            state.template = payload.template
        },
    }
})

export const {
    changePopup,
} = popupsSlice.actions

export default popupsSlice.reducer