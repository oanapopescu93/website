import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'
import { checkSubmit } from '../../validate'
import { translate } from '../../translations/translate'
import MapSection from './mapSection'
import {changePopup} from '../../reducers/popups'

function Child(props){
	let contact = []
	let social = []
	let login_visitor = props.login_visitor
	if(props.data[0]){
		contact = props.data[0]
	}
	if(props.data[1]){
		social = props.data[1]
	}
	return <div className={props.div_class + " text-left"}>
			<ul>
				{
					contact.map(function(item, i){
						if(!(login_visitor && item.icon === "fa fa-phone")){
							if(item.link){
								return <li key={i}><i className={item.icon}></i><a href={item.link}>{item.text}</a></li>
							} else {
								return <li key={i}><i className={item.icon}></i><span>{translate({lang: props.lang, info: item.text})}</span></li>
							}
						} else {
							return null
						}
					})
				}
			</ul>
			<ul className="text-center">
				{
					social.map(function(item, i){						
						return <li key={i}><a href={item.link} target="_blank" rel="noopener noreferrer"><i className={item.icon}></i></a></li>
					})
				}
			</ul>
	</div>
}

function Contact(props){
	let data = props.data
	let socket = props.socket
	const [errorEmail, setErrorEmail] = useState(true)
	const [errorTitle, setErrorTitle] = useState(true)
	const [errorMessage, setErrorMessage] = useState(true)
	const [resultsClass, setResultsClass] = useState("")
	let dispatch = useDispatch()

	function flip(){		
		if(!$('.contact_page_container').hasClass('flip')){
			$('.contact_page_container').addClass('flip')
			setTimeout(function() {
				$('.contact_page_container').addClass('open')
				setTimeout(function() {
					$('.contact_page_container').addClass('turn')
				}, 800)
			}, 1000)			
		}	
	}

	function send_form(){
		let send = true
		setErrorEmail(true)
		setErrorTitle(true)
		setErrorMessage(true)		
		
		if(!checkSubmit($('#contact_email').val(), 'email')){
			send = false
			setErrorEmail(false)
		}
		if(!checkSubmit($('#contact_title').val(), 'title')){
			send = false
			setErrorTitle(false)
		}
		if(!checkSubmit($('#contact_message').val(), 'message')){
			send = false
			setErrorMessage(false)
		}

		if(send){
			setResultsClass('')
			let payload = {
				first_name: $('#contact_first_name').val(),
				last_name: $('#contact_last_name').val(),
				email: $('#contact_email').val(),
				phone: $('#contact_telephone').val(),
				subject: $('#contact_title').val(),
				html: $('#contact_message').val(),
			}
			socket.emit('contact_send', payload)			
		}
	}

	socket.on('contact_read', function(res){
		if(res && res[props.lang]){
			let title = res[props.lang][0]
			let style = 'success'
			if(!res.send){
				style = 'error'
			}
			dispatch(changePopup({open: true, title: title, template: "contact_results", data: res[props.lang][1], style}))
		} else {
			console.warn('error sending message')
		}
	})
	
	return <Container>
				<Row>
					<Col sm={6} className="visible-xs-block">
						<Child div_class="contact-page-mobile" login_visitor={props.login_visitor} data={data} lang={props.lang}></Child>
					</Col>
					<Col sm={6} className="box-form">
						<Form>
							<Row>
								<Col className="col-xs-6">
									<label htmlFor="first_name">{translate({lang: props.lang, info: "first_name"})}</label>
									<input id="contact_first_name" className="form-control shadow_concav" type="text" name="first_name"></input>
								</Col>
								<Col className="col-xs-6">
									<label htmlFor="last_name">{translate({lang: props.lang, info: "last_name"})}</label>
									<input id="contact_last_name" className="form-control shadow_concav" type="text" name="last_name"></input>
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<label htmlFor="email">{translate({lang: props.lang, info: "email"})} *</label>
									<input id="contact_email" className="form-control shadow_concav" type="text" name="email"></input>
									{!errorEmail ? <p className="contact_error text-red">{translate({lang: props.lang, info: "error_email"})}</p> : null}									
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<label htmlFor="telephone">{translate({lang: props.lang, info: "phone"})}</label>
									<input id="contact_telephone" className="form-control shadow_concav" type="text" name="telephone"></input>
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<label htmlFor="message">{translate({lang: props.lang, info: "title"})} *</label>
									<input id="contact_title" className="form-control shadow_concav" type="text" name="title"></input>
									{!errorTitle ? <p className="contact_error text-red">{translate({lang: props.lang, info: "error_title"})}</p> : null}
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<label htmlFor="message">{translate({lang: props.lang, info: "message"})} *</label>
									<textarea id="contact_message" className="form-control shadow_concav" name="message" cols="25" rows="6"></textarea>
									{!errorMessage ? <p className="contact_error text-red">{translate({lang: props.lang, info: "error_message"})}</p> : null}
								</Col>
							</Row>
							<Row>
								<Col sm={12}>
									<Button onClick={()=>{send_form()}} className="button-white shadow_convex" name="send" type="button">{translate({lang: props.lang, info: "send"})}</Button>
								</Col>
							</Row>
						</Form>
					</Col>
					<Col sm={6} className="box-container text-center hidden-xs">
						<div className="contact_page_container">
							<div className="contact_back">
								<div className="click_me" onClick={flip}>
									<span>Click</span>
								</div>
							</div>
							<div className="contact_front">
								<Child div_class="contact-info" login_visitor={props.login_visitor} data={data} lang={props.lang}></Child>
								<div className="corner corner-1"></div>
								<div className="corner corner-2"></div>
								<div className="corner corner-3"></div>
								<div className="corner corner-4"></div>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<MapSection lang={props.lang}></MapSection>
					</Col>
				</Row>
				
				<div className={"show_results_container " + resultsClass}>
					<div className="show_results"><h1></h1><p></p></div>
				</div>
	</Container>
}

export default Contact