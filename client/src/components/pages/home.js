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
			login_visitor:getCookie('login_visitor'),
		};
		this.handleChoice = this.handleChoice.bind(this);
		this.getData = this.getData.bind(this);
	}
	handleChoice(x){
		let self = this;
		self.getData(x).then(function(res){
			self.setState({ data: res });
			self.setState({ login_visitor: res.login_visitor });
			setCookie("login_visitor", res.login_visitor, 1);
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
		let login_visitor = getCookie('login_visitor');
		if(login_visitor === "true"||login_visitor === "false"){
			self.getData({login_visitor: login_visitor, reason: "refresh"}).then(function(res){
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
		let self = this;
		let login_visitor = this.state.login_visitor;
		return (
			<>
				{(() => {					
					if(login_visitor !== ""){						
						if(self.state.data && Object.keys(self.state.data).length !== 0){
							return (
								<HomePage socket={self.state.socket} data={self.state.data}></HomePage>
							);
						} else {
							return (
								<Splash></Splash>
							);							
						}
					} else {
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
