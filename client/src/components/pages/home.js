import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import HomePage from './HomePage'
import Login from './Login'
import Splash from './partials/splash_screen'

import { getCookie, setCookie, showResults } from './utils'
import { bringPayload } from '../reducers/home'

import '../css/style.css'
import { changeVisitor } from '../reducers/settings'

function Home(props){
	const [token, setToken] = useState(getCookie('login_token') ? getCookie('login_token') : "")
	let visitor = useSelector(state => state.settings.visitor)
	let lang = useSelector(state => state.settings.lang)
	let home = useSelector(state => state.home)
	let dispatch = useDispatch()

	useEffect(() => {
		dispatch(bringPayload())

		if(token !== ""){
			getLogin({login_token: token, reason: "refresh"})
		}

		setInterval(function () {		  
			props.socket.emit('heartbeat', { data: "ping" })
		}, 15000)

		props.socket.on('server_error', function (text) {
			showResults("Error", text)
			console.log('server_error ', text)
		}) 
	}, [])

	function handleChoice(x){
		getLogin(x).then(function(res){
			console.log(res)
			if(res){
				setToken(res.login_token)
				setCookie("login_token", res.login_token, 1)
				dispatch(changeVisitor(res.login_visitor))
			}
		})
	}
	function getLogin(x){
		return new Promise(function(resolve, reject){
			props.socket.emit('info_send', x)
			props.socket.on('info_read', function(res){
				resolve(res)
			})
		})
	}
	
	return <>
		{(() => {
			if(token !== ""){
				if(home && home.about && home.portofolio && home.contact){
					return <HomePage socket={props.socket} data={home} lang={lang} visitor={visitor}></HomePage>
				} else {
					return <Splash></Splash>	
				}
			} else {
				return <Login choice={(e)=>handleChoice(e)} socket={props.socket} lang={lang}></Login>
			}
		})()}
	</>
}

export default Home
