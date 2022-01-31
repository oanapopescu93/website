import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/style.css';
import logo_icon from '../img/logo-bear.png';

class Header extends Component {
	render() {
        return (
            <header id="home" className="full-height">
				<div className="full-height-content">
					<Container className="text-center">
						<Row>
							<Col id="header-title" sm={12}>
								<a href="/">
									<img className="logo" alt="logo_icon" src={logo_icon} />
									<h1 className="text-uppercase blacktext">Oana Popescu</h1>
									<h2 className="text-uppercase color_text_blue">Frontend / Javascript developer</h2>
								</a>
							</Col>
						</Row>
						<Row>
							<Col sm={12}>
								<Row>
									<Col sm={2}></Col>
									<Col sm={8}>
										<hr className="line"></hr>
										<p>
											<span>I'm a self-taught frontend and javascript developer.</span>
											<br></br>
											<span>My passion is to create <b>websites</b>, <b>web applications</b>, and <b>games</b>.</span>
										</p>
										<hr className="line"></hr>
									</Col>
									<Col sm={2}></Col>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col id="header-buttons" sm={12}>
								<a href="#about" className="text-black scroll-button">
									<button className="button-white"><h6 className="text-uppercase">Read more</h6></button>
								</a>
								<a href="#contact" className="text-black scroll-button">
									<button className="button-white"><h6 className="text-uppercase">Contact me</h6></button>
								</a>
								<a href="/personal/chatbot/index.html" target="_blank" className="text-black">
									<button className="button-white"><h6 className="text-uppercase">Chatbot</h6></button>
								</a>
							</Col>
						</Row>
						<div className="scroll">
							<a href="#about" className="scroll-button"><i className="fa fa-angle-down"></i></a>
						</div>
					</Container>
				</div>
			</header>
        );
    }
}

export default Header;