import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

var self;
class Contact extends Component {
	constructor(props) {
		super(props);
		self = this;
		self.state = {
			contact: props.data,
		};
	}
	componentDidMount() {
		
	}

	render() {
		return (
			<div id="contact" className="full-height">
				<div className="full-height-title">
					<Container>
						<Row>
							<Col sm={12}>
								<hr className="line"></hr>
								<h3 className="text-uppercase">Contact me<span className="glyphicon glyphicon-send title-icon"></span></h3>
								<hr className="line"></hr>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="full-height-content">
					{ 
						!self.state.contact ? <div>Under construction</div> : 
						<div></div> 
					}   
				</div>
			</div>
		);
	}
}

export default Contact;