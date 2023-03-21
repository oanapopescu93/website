import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import allReducers from './components/reducers'
import allSagas from './components/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
	reducer: allReducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(allSagas)

ReactDOM.render(  
	<Provider store={store}>
		<App></App>
	</Provider>,
	document.getElementById('root')
)