import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'; 
import { showResults } from './utils';

function Child(props){
	let contact = [];
	let social = [];
	let login_visitor = props.login_visitor;
	if(props.data[0]){
		contact = props.data[0];
	}
	if(props.data[1]){
		social = props.data[1];
	}
	return (
		<div className={props.div_class + " text-left"}>
			<ul>
				{
					contact.map(function(item, i){
						if(!(login_visitor === "true" && item.icon === "fa fa-phone")){
							if(item.link){
								return (
									<li key={i}><i className={item.icon}></i><a href={item.link}>{item.text}</a></li>
								)
							} else {
								return (
									<li key={i}><i className={item.icon}></i><span>{item.text}</span></li>
								)
							}
						} else {
							return null; 
						}
					})
				}
			</ul>
			<ul className="text-center">
				{
					social.map(function(item, i){						
						return (
							<li key={i}><a href={item.link} target="_blank"  rel="noopener noreferrer"><i className={item.icon}></i></a></li>
						)
					})
				}
			</ul>
		</div>
	);
}

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			socket: props.socket,
		};
		this.send_form = this.send_form.bind(this);
	}
	componentDidMount() {
		$('body').on('click', '.click_me', function () {
			var contact_page_container = $(this).parent().parent();
			if(!contact_page_container.hasClass('flip')){
				contact_page_container.addClass('flip');
				setTimeout(function() {
					contact_page_container.addClass('open');
					setTimeout(function() {
						contact_page_container.addClass('turn');
					}, 800);
				}, 1000);			
			}			
		});
	}

	send_form(){
		let send = true;
		$('#contact_email_error').hide();
		$('#contact_message_error').hide();

		let contact_email = $('#contact_email').val();	
		let regex = '^[a-zA-Z0-9]+[@]+[a-zA-Z0-9]+[.]+[a-zA-Z]{2,4}$'
		let regex_exp = new RegExp(regex);					
		let pass_result = regex_exp.test(contact_email);
		if(!pass_result){
			send = false;
			$('#contact_email_error').show();
		}

		let contact_message = $('#contact_message').val();
		if(contact_message === ""){
			send = false;
			$('#contact_message_error').show();
		}

		if(send){
			let payload = {
				first_name: $('#contact_first_name').val(),
				last_name: $('#contact_last_name').val(),
				email: contact_email,
				phone: $('#contact_telephone').val(),
				subject: $('#contact_title').val(),
				html: contact_message,
			}
			this.state.socket.emit('contact_send', payload);
			this.state.socket.on('contact_read', function(data){
				$('.show_results_container').removeClass('success error')
				if(data[0] === "Success!"){
					$('.show_results_container').addClass('success')
				} else if(data[0] === "Error!"){
					$('.show_results_container').addClass('error')
				}
				showResults(data[0], data[1]);
			});
		}
	}

	render() {
		let login_visitor = this.props.login_visitor;
		return (
			<Container>
					<Row>
						<Col sm={6} className="visible-xs-block">
							<Child div_class="contact-page-mobile" login_visitor={login_visitor} data={this.state.data}></Child>
						</Col>
						<Col sm={6} className="box-contact-form">
							<Form>
								<Row>
									<Col sm={6}>
										<label htmlFor="first_name">First Name</label>
										<input id="contact_first_name" className="form-control shadow_concav" type="text" name="first_name"></input>
									</Col>
									<Col sm={6}>
										<label htmlFor="last_name">Last Name</label>
										<input id="contact_last_name" className="form-control shadow_concav" type="text" name="last_name"></input>
									</Col>
								</Row>
								<Row>
									<Col sm={12}>
										<label htmlFor="email">Email Address *</label>
										<input id="contact_email" className="form-control shadow_concav" type="text" name="email"></input>
										<p className="contact_error text-red" id="contact_email_error">Please provide an email.</p>
									</Col>
								</Row>
								<Row>
									<Col sm={12}>
										<label htmlFor="telephone">Telephone Number</label>
										<input id="contact_telephone" className="form-control shadow_concav" type="text" name="telephone"></input>
									</Col>
								</Row>
								<Row>
									<Col sm={12}>
										<label htmlFor="message">Title</label>
										<input id="contact_title" className="form-control shadow_concav" type="text" name="title"></input>
									</Col>
								</Row>
								<Row>
									<Col sm={12}>
										<label htmlFor="message">Message *</label>
										<textarea id="contact_message" className="form-control shadow_concav" name="message" cols="25" rows="6"></textarea>
										<p className="contact_error text-red" id="contact_message_error">Please provide a message.</p>
									</Col>
								</Row>
								<Row>
									<Col sm={12}>
										<Button onClick={()=>{this.send_form()}} className="button-white shadow_convex" name="send" type="button">Send</Button>
									</Col>
								</Row>
							</Form>
						</Col>
						<Col sm={6} className="box-container text-center hidden-xs">
							<div className="contact_page_container">
								<div className="contact_back">
									<div className="click_me">
										<span>Click me</span>
									</div>
								</div>
								<div className="contact_front">
									<Child div_class="contact-info" login_visitor={login_visitor} data={this.state.data}></Child>
									<div className="corner corner-1"></div>
									<div className="corner corner-2"></div>
									<div className="corner corner-3"></div>
									<div className="corner corner-4"></div>
								</div>
							</div>
						</Col>
					</Row>
					<div className="show_results_container">
						<div className="show_results">
							<h1> </h1>
							<p> </p>
						</div>
					</div>
			</Container>
		);
	}
}

export default Contact;