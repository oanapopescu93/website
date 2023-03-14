import {combineReducers} from 'redux'
import settingsReducer from './settings'
import popupsReducer from './popups'

const allReducers = combineReducers({
	settings: settingsReducer,
	popups: popupsReducer,
})

export default allReducers