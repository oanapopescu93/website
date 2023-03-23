import React from 'react'
import {useDispatch} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import logo_icon_white from '../../img/logo-bear-white.png'
import logo_icon_light from '../../img/logo-rat-white.png'
import logo_icon_dark from '../../img/logo-rat-blue.png'
import Parser from 'react-html-parser'
import { scroll_anywhere } from '../utils'
import { translate } from '../../translations/translate'
import { changePage } from '../../reducers/page'

function Header(props){
	const {mode} = props 
	let description = translate({lang: props.lang, info: "header_description"})	
	let dispatch = useDispatch()

	function handleClick(){
		dispatch(changePage('chatbot'))
	}

	return <Container>
			<Row>
				<Col sm={12} className="header-title-container text-center shadow_convex">
					<Row>
						<Col id="header-title" sm={12}>
							<a href="/">
								{(() => {
									if(mode && (mode === '' || mode === 'light')){
										return <img className="logo" alt="logo_icon" src={logo_icon_light} />
									} else {
										return <img className="logo" alt="logo_icon" src={logo_icon_dark} />
									}
								})()}
								<h1 className="border_white text-uppercase">Oana Popescu</h1>
								<h2 className="border_white text-uppercase color_text_blue">Frontend/Javascript/React developer</h2>
							</a>
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<Row>
								<Col sm={2}></Col>
								<Col sm={8} id="header-sapou">
									<hr className="line"></hr>
									<p className="border_white">{Parser(description)}</p>
									<hr className="line"></hr>
								</Col>
								<Col sm={2}></Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col id="header-buttons" sm={12}>
							<a href="#about" className="text-black button-white text-uppercase scroll-button shadow_convex" onClick={(e)=>{scroll_anywhere(e)}}>
								{translate({lang: props.lang, info: "read_more"})}
							</a>
							<a href="#contact" className="text-black button-white text-uppercase scroll-button shadow_convex" onClick={(e)=>{scroll_anywhere(e)}}>
								{translate({lang: props.lang, info: "contact_me"})}
							</a>
							<div className="text-black button-white text-uppercase shadow_convex" style={{'cursor': 'pointer'}} onClick={()=>{handleClick()}}>Chatbot</div>
						</Col>
					</Row>
				</Col>
			</Row>				
			<div className="scroll">
				<a href="#about" className="scroll-button fa fa-angle-down" onClick={(e)=>{scroll_anywhere(e)}}> </a>
			</div>
	</Container>
}

export default Header