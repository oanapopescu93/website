import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: props.data,
		};
	}
	componentDidMount() {
		
	}

	render() {
		return (
			<Container>
					<Row>
						<Col sm={12}>
						</Col>
					</Row>
			</Container>
		);
	}
}

export default Contact;