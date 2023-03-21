import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    title: "",
    template: "",
    data: null,
    size: "sm",
    style: "",
}

const popupsSlice = createSlice({
    name: 'popups',
    initialState,
    reducers: {
        changePopup: (state, { payload }) => {
            state.open = payload.open
            state.title = payload.title
            state.template = payload.template
            if(payload.data){
                state.data = payload.data
            }
            if(payload.size){
                state.size = payload.size
            }
            if(payload.style){
                state.style = payload.style
            }
        },
    }
})

export const {
    changePopup,
} = popupsSlice.actions

export default popupsSlice.reducer