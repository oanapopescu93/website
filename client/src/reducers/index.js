import {combineReducers} from 'redux'

import authReducer from './auth'
import homeReducer from './home'
import pageReducer from './page'
import popupReducer from './popup'
import settingsReducer from './settings'

const allReducers = combineReducers({	
	auth: authReducer,
	home: homeReducer,	
	page: pageReducer,
	popup: popupReducer,
	settings: settingsReducer
})

export default allReducers