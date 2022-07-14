import React, {Component} from 'react';
import './css/style.css';
import Home from './pages/home';

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

class App extends Component {
	render() {
		// my_console.disable();	
		return (
			<>
				<Home socket={socket}></Home> 
			</>
		);
	}
}

export default App;