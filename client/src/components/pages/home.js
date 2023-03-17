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
	const [token, setToken] = useState(getCookie('login_token') ? getCookie('login_token') : "")
	const [visitor, setVisitor] = useState(getCookie('login_visitor') ? getCookie('login_visitor') : false)
	let lang = useSelector(state => state.settings.lang)
	let home = useSelector(state => state.home)
	let dispatch = useDispatch()

	useEffect(() => {
		dispatch(bringPayload())

		console.log('token ', token)

		if(token !== ""){
			getLogin({login_token: token, reason: "refresh"})
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
				setVisitor(res.login_visitor)
				setCookie("login_token", res.login_token, 1)
				setCookie("login_visitor", res.login_visitor, 1)
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
					return <HomePage socket={socket} data={home} lang={lang} visitor={visitor}></HomePage>
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
