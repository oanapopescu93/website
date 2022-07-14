import React, { Component } from 'react';
import HomePage from './HomePage';
import Login from './Login';
import { getCookie, setCookie, showResults } from './utils';
import Splash from './partials/splash_screen';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			socket: props.socket,
			token: getCookie('login_token') ? getCookie('login_token') : "",
		};
		this.handleChoice = this.handleChoice.bind(this);
		this.getData = this.getData.bind(this);
	}
	handleChoice(x){
		let self = this;
		self.getData(x).then(function(res){
			self.setState({ data: res });
			self.setState({ login_token: res.login_token });
			setCookie("login_token", res.login_token, 1);
			console.log('xxx--> ', res.login_token)
		})
	}
	getData(x){
		let self = this;
		return new Promise(function(resolve, reject){
			self.state.socket.emit('info_send', x);
			self.state.socket.on('info_read', function(data){
				resolve(data);
			});
		});	
	};
	componentDidMount(){
		let self = this;
		let login_token = getCookie('login_token') ? getCookie('login_token') : ""
		console.log('zzz01', login_token)
		if(login_token !== ""){
			self.getData({login_token: login_token, reason: "refresh"}).then(function(res){
				self.setState({ data: res });
			})
		}

		setInterval(function () {		  
			self.state.socket.emit('heartbeat', { data: "ping" });
		}, 15000)

		self.state.socket.on('server_error', function (text) {
			showResults("Error", text);
			console.log('server_error ', text);
		}); 
	}
	render() {
		let login_token = getCookie('login_token') ? getCookie('login_token') : ""		
		return (
			<>
				{(() => {					
					if(login_token !== ""){	
						console.log('zzz021 ', login_token, login_token !== "")					
						if(this.state.data && Object.keys(this.state.data).length !== 0){
							return (
								<HomePage socket={this.state.socket} data={this.state.data}></HomePage>
							);
						} else {
							return (
								<Splash></Splash>
							);							
						}
					} else {
						console.log('zzz022 ', login_token, login_token !== "")
						return (
							<Login choice={(e)=>this.handleChoice(e)} socket={this.state.socket}></Login>
						);
					}	
				})()}
			</>
		);
	}
}

export default Home;
