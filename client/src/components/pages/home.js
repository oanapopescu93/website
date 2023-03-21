import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { bringPayload } from '../reducers/home'
import { changeVisitor } from '../reducers/settings'
import { getCookie, setCookie } from '../utils'

import HomePage from './homePage'
import Splash from './partials/splashScreen'
import Login from './loginPage'

import 'bootstrap/dist/css/bootstrap.css'
import '../css/style.css'

function Home(props){
	const [token, setToken] = useState(getCookie('login_token') ? getCookie('login_token') : "")
	let dispatch = useDispatch()
	let home = useSelector(state => state.home)
	let lang = useSelector(state => state.settings.lang)
	let visitor = useSelector(state => state.settings.visitor)

	useEffect(() => {
		dispatch(bringPayload())
		if(token !== ""){
			handleChoice({login_token: token, reason: "refresh"})
		}
	}, [dispatch, handleChoice, token])

	function handleChoice(x){
		getLogin(x).then(function(res){
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