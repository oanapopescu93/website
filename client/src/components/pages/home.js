import React, { Component } from 'react';
import Navbar from './navbar'
import Footer from './partials/footer';
import Top from './partials/top';
import Section from './section';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data
		};
	}
	render() {
		return (
			<>	
				<Navbar></Navbar>
				<Section template="header" data={this.state.data.header}></Section>
				<Section template="about" data={this.state.data.about}></Section>
				<Section template="portofolio" data={this.state.data.portofolio}></Section>
				<Section template="contact" data={this.state.data.contact}></Section>
				<Top></Top>
				<Footer></Footer>
			</>
		);
	}
}

export default Home;
