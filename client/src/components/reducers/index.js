import {combineReducers} from 'redux'
import languageReducer from './language'

const allReducers = combineReducers({
	language: languageReducer,
})

export default allReducers