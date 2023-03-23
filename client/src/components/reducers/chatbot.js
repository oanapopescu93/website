import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [],
}

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        changeMessage: (state, { payload }) => {
            if(payload.choice){
                state.messages.push({choice: payload.choice, type: 'bot'})
            } else {
                state.messages.push({message: payload.message, type: 'bot'})
            }         
        },
    }
})

export const {
    changeMessage,
} = chatbotSlice.actions

export default chatbotSlice.reducer