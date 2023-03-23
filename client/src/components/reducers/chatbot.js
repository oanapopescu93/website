import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [],
}

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        message: (state, { payload }) => {
            state.messages.push({message: payload, type: 'user'})
        },
    }
})

export const {
    message,
} = chatbotSlice.actions

export default chatbotSlice.reducer