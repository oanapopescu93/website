import React, { Component } from 'react';
import Navbar from './navbar'
import Cv from './partials/cv';
import Footer from './partials/footer';
import Top from './partials/top';
import Tutorial from './partials/tutorial';
import Section from './section';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			socket: props.socket,
		};
	}
	render() { 
        let login_visitor = this.state.data.login_visitor; // true = visitor; false = HR / future employer        
		return (
            <>                	
                <Navbar login_visitor={login_visitor}></Navbar>
                <Section template="header" login_visitor={login_visitor} data={this.state.data.header} socket={this.state.socket}></Section>
                <Section template="about" login_visitor={login_visitor} data={this.state.data.about} socket={this.state.socket}></Section>
                <Section template="portofolio" login_visitor={login_visitor} data={this.state.data.portofolio} socket={this.state.socket}></Section>
                <Section template="contact" login_visitor={login_visitor} data={this.state.data.contact} socket={this.state.socket}></Section>
                { !login_visitor || login_visitor === "false"? 
                    <Cv login_visitor={login_visitor}></Cv> : null
                }
                <Tutorial login_visitor={login_visitor} tutorials={this.state.data.portofolio.tutorials}></Tutorial>
                <Top></Top>
                <Footer></Footer>
            </>
		);
	}
}

export default HomePage;
