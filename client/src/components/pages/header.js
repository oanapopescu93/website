import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/style.css';
import logo_icon from '../img/logo-bear.png';
import Parser from 'react-html-parser';
import { scroll_anywhere } from './utils';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.data[0],
			subtitle: props.data[1],
			description: props.data[2],
		};
	}
	render() {
        return (
			<Container className="text-center">
				<Row>
					<Col id="header-title" sm={12}>
						<a href="/">
							<img className="logo" alt="logo_icon" src={logo_icon} />
							<h1 className="text-uppercase blacktext">{this.state.title}</h1>
							<h2 className="text-uppercase color_text_blue">{this.state.subtitle}</h2>
						</a>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<Row>
							<Col sm={2}></Col>
							<Col sm={8} id="header-sapou">
								<hr className="line"></hr>
								<p>{Parser(this.state.description)}</p>
								<hr className="line"></hr>
							</Col>
							<Col sm={2}></Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col id="header-buttons" sm={12}>
						<a href="#about" className="text-black button-white text-uppercase scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>Read more</a>
						<a href="#contact" className="text-black button-white text-uppercase scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>Contact me</a>
						<a href="/" target="_blank" className="text-black button-white text-uppercase">Chatbot</a>
					</Col>
				</Row>
				<div className="scroll">
					<a href="#about" className="scroll-button fa fa-angle-down" onClick={(e)=>{scroll_anywhere(e)}}> </a>
				</div>
			</Container>
        );
    }
}

export default Header;