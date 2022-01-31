import React, {Component} from 'react';
import './css/style.css';
import Home from './pages/home';
import Splash from './pages/partials/splash_screen';

import socketIOClient from "socket.io-client/dist/socket.io";
const socket = socketIOClient("/");

var my_console = function(){
    var oldConsole = null;
    var me = {};

    me.enable =  function enable(){
		if(oldConsole == null) return;
		window['console']['log'] = oldConsole;
		window['console']['warn'] = oldConsole;
		window['console']['error'] = oldConsole;
	};

    me.disable = function disable(){
		oldConsole = console.log;
		window['console']['log'] = function() {};
		window['console']['warn'] = function() {};
		window['console']['error'] = function() {};
	};

    return me;
}();

var self;
class App extends Component {	
	constructor(props) {
		super(props);
		self = this;
		self.state = {
			data: null,
		};
		self.getData = self.getData.bind(self);
	}

	componentDidMount() {
		self.getData()
		.then(res => {
			setTimeout(function(){
				self.setState({ data: res });
			}, 1000);	
		});
	}

	getData(){
		return new Promise(function(resolve, reject){
			socket.emit('info_send', 'info');
			socket.on('info_read', function(data){
				resolve(data);	
			});
		});	
	};

	render() {
		//my_console.disable();	
		return (
			<div className="App">	
				{ 
					!self.state.data ? <Splash></Splash> : <Home data={self.state.data}></Home> 
				}    			
		  	</div>
		);
	}
}

export default App;