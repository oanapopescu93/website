import {combineReducers} from 'redux'
import settingsReducer from './settings'
import popupsReducer from './popups'
import homeReducer from './home'
import chatbotReducer from './chatbot'
import pageReducer from './page'

const allReducers = combineReducers({
	settings: settingsReducer,
	popups: popupsReducer,
	home: homeReducer,
	chatbot: chatbotReducer,
	page: pageReducer,
})

export default allReducers