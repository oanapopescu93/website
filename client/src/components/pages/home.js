import React, { Component } from 'react';
import Navbar from './navbar'
import Header from './header'
import About from './about'
import Portofolio from './portofolio'
import Contact from './contact'
import Footer from './partials/footer';
import Top from './partials/top';

var self;
class Home extends Component {
	constructor(props) {
		super(props);
		self = this;
		self.state = {
			about: props.data.about,
			portofolio: props.data.portofolio,
			contact: props.data.contact
		};
	}
	render() {
		return (
			<>	
				<Navbar></Navbar>
				<Header></Header>
				<About data={self.state.about}></About>
				<Portofolio data={self.state.portofolio}></Portofolio>
				<Contact data={self.state.contact}></Contact>
				<Top></Top>
				<Footer></Footer>
			</>
		);
	}
}

export default Home;
