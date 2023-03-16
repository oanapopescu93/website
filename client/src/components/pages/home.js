import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import HomePage from './HomePage'
import Login from './Login'
import Splash from './partials/splash_screen'

import { getCookie, setCookie, showResults } from './utils'
import { bringPayload } from '../reducers/home'

import '../css/style.css'

function Home(props){
	let socket = props.socket
	const [token, setToken] = useState('')
	let lang = useSelector(state => state.settings.lang)
	let home = useSelector(state => state.home)
	let dispatch = useDispatch()

	useEffect(() => {
		dispatch(bringPayload())

		let login_token = getCookie('login_token') ? getCookie('login_token') : ""
		setToken(login_token)

		if(login_token !== ""){
			getLogin({login_token: login_token, reason: "refresh"})
		}

		setInterval(function () {		  
			socket.emit('heartbeat', { data: "ping" })
		}, 15000)

		socket.on('server_error', function (text) {
			showResults("Error", text)
			console.log('server_error ', text)
		}) 
	}, [])

	function handleChoice(x){
		getLogin(x).then(function(res){
			if(res){
				setToken(res.login_token)
				setCookie("login_token", res.login_token, 1)
			}
		})
	}
	function getLogin(x){
		return new Promise(function(resolve, reject){
			socket.emit('info_send', x)
			socket.on('info_read', function(res){
				resolve(res)
			})
		})
	}
	
	return <>
		{(() => {
			if(token !== ""){
				if(home && home.about && home.portofolio && home.contact){
					return <HomePage socket={socket} data={home} lang={lang}></HomePage>
				} else {
					return <Splash></Splash>	
				}
			} else {
				return <Login choice={(e)=>handleChoice(e)} socket={socket}></Login>
			}
		})()}
	</>
}

export default Home
