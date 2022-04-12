import React, { Component } from 'react';
import Navbar from './navbar'
import Footer from './partials/footer';
import Top from './partials/top';
import Section from './section';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			socket: props.socket
		};
	}
	render() {
		return (
			<>	
				<Navbar></Navbar>
				<Section template="header" data={this.state.data.header} socket={this.state.socket}></Section>
				<Section template="about" data={this.state.data.about} socket={this.state.socket}></Section>
				<Section template="portofolio" data={this.state.data.portofolio} socket={this.state.socket}></Section>
				<Section template="contact" data={this.state.data.contact} socket={this.state.socket}></Section>
				<Top></Top>
				<Footer></Footer>
			</>
		);
	}
}

export default Home;
