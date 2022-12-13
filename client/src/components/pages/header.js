import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/style.css'
import logo_icon_white from '../img/logo-bear-white.png'
import Parser from 'react-html-parser'
import { scroll_anywhere } from './utils'

function Header(props){
	let title = props.data[0]
	let subtitle = props.data[1]
	let description = props.data[2]
	return (
		<Container>
			<Row>
				<Col sm={12} className="header-title-container text-center shadow_convex">
					<Row>
						<Col id="header-title" sm={12}>
							<a href="/">
								<img className="logo" alt="logo_icon" src={logo_icon_white} />
								<h1 className="text-uppercase">{title}</h1>
								<h2 className="text-uppercase color_text_blue">{subtitle}</h2>
							</a>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<Row>
								<Col sm={2}></Col>
								<Col sm={8} id="header-sapou">
									<hr className="line"></hr>
									<p>{Parser(description)}</p>
									<hr className="line"></hr>
								</Col>
								<Col sm={2}></Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col id="header-buttons" sm={12}>
							<a href="#about" className="text-black button-white text-uppercase scroll-button shadow_convex" onClick={(e)=>{scroll_anywhere(e)}}>Read more</a>
							<a href="#contact" className="text-black button-white text-uppercase scroll-button shadow_convex" onClick={(e)=>{scroll_anywhere(e)}}>Contact me</a>
							<a href="/portofolio/chatbot/index.html" target="_blank" className="text-black button-white text-uppercase shadow_convex">Chatbot</a>
						</Col>
					</Row>
				</Col>
			</Row>				
			<div className="scroll">
				<a href="#about" className="scroll-button fa fa-angle-down" onClick={(e)=>{scroll_anywhere(e)}}> </a>
			</div>
		</Container>
	)
}

export default Header