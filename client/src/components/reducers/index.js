import {combineReducers} from 'redux'
import darkModeReducer from './darkMode'
import languageReducer from './language'

const allReducers = combineReducers({
	darkMode: darkModeReducer,
	language: languageReducer,
})

export default allReducers