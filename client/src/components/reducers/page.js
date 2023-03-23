import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 'default',
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePage: (state, { payload }) => {
            state.page = payload
        },
    }
})

export const {
    changePage,
} = pageSlice.actions

export default pageSlice.reducer