import allReducers from './reducers'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ 
	reducer: allReducers,
})

export default store