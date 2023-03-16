import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    about: null,
    portofolio: null,
    contact: null,            
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        bringPayload: () => {
            //console.log("bringThemAll!!!")
        },
        showPayload: (state, { payload }) => {
            if(payload.about){
                state.about = payload.about
            }
            if(payload.portofolio){
                state.portofolio = payload.portofolio
            }
            if(payload.contact){
                state.contact = payload.contact
            }
        },
        resetHome: () => initialState,
    }
})

export const {bringPayload, showPayload, resetHome} = homeSlice.actions

export default homeSlice.reducer