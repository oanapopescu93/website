import React, { useState, useEffect } from 'react'
import HomePage from './HomePage'
import Login from './Login'
import { getCookie, setCookie, showResults } from './utils'
import Splash from './partials/splash_screen'
import '../css/style.css'

function Home(props){
	let socket = props.socket
	const [token, setToken] = useState('')
	const [data, setData] = useState(null)

	useEffect(() => {
		let login_token = getCookie('login_token') ? getCookie('login_token') : ""
		setToken(login_token)

		if(login_token !== ""){
			getData({login_token: login_token, reason: "refresh"}).then(function(res){
				setData(res)
			})
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
		getData(x).then(function(res){
			setData(res)
			setToken(res.login_token)
			setCookie("login_token", res.login_token, 1)
		})
	}
	function getData(x){
		return new Promise(function(resolve, reject){
			socket.emit('info_send', x)
			socket.on('info_read', function(data){
				resolve(data)
			})
		})
	}
	
	return (
		<>
			{(() => {					
				if(token !== ""){			
					if(data && Object.keys(data).length !== 0){
						return <HomePage socket={socket} data={data}></HomePage>
					} else {
						return <Splash></Splash>	
					}
				} else {
					return <Login choice={(e)=>handleChoice(e)} socket={socket}></Login>
				}	
			})()}
		</>
	)
}

export default Home
