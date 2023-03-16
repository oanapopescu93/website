import {combineReducers} from 'redux'
import settingsReducer from './settings'
import popupsReducer from './popups'
import homeReducer from './home'

const allReducers = combineReducers({
	settings: settingsReducer,
	popups: popupsReducer,
	home: homeReducer,
})

export default allReducers