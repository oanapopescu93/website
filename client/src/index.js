import React from 'react'
import App from './components/App'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

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

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode> 
		<Provider store={store}>
			<App></App>
		</Provider>
	</StrictMode> 
)