import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'; 
import Carousel from './partials/carousel';
import { Modal, Button } from "react-bootstrap";

function Child(props){     
	return (
		<Carousel template={props.template} id={props.id} item_list={props.item_list}></Carousel>
	);
}

var self;
class Portofolio extends Component {
	constructor(props) {
		super(props);
		self = this;
		self.state = {
			portofolio: props.data,
			isOpen: false
		};
		self.portofolio_image_click = self.portofolio_image_click.bind(self);
	}

	openModal = () => this.setState({ isOpen: true });
  	closeModal = () => this.setState({ isOpen: false });

	portofolio_image_click(){
		$('body').on('click', '.item-info img', function (e) {
			self.openModal()	
			console.log('click', $(this), e)	
		});
	};

	componentDidMount() {	
		let portofolio_list = self.state.portofolio.portofolio_list;	
		for(let i in portofolio_list){
			$('.portofolio-list').append('<li>'+ portofolio_list[i] +'</li>');
		}
		$('.portofolio-list li').eq(0).addClass('active');

		$('body').on('click', '.portofolio-list li', function () {
			var element = $(this);
			$('.portofolio-list li').removeClass('active');
			element.addClass('active');
			$('.portofolio-container .owl_container').hide();
			if($('.portofolio-list li').eq(0).hasClass('active')){				
				$('#owl_carousel_0').show();
			}
			if($('.portofolio-list li').eq(1).hasClass('active')){
				$('#owl_carousel_1').show();
			}
			if($('.portofolio-list li').eq(2).hasClass('active')){
				$('#owl_carousel_2').show();
			}
			if($('.portofolio-list li').eq(3).hasClass('active')){
				$('#owl_carousel_3').show();
			}
		});

		self.portofolio_image_click();
	}

	render() {
		return (
			<div id="portofolio" className="full-height">
				<div className="full-height-title">
					<Container>
						<Row>
							<Col sm={12}>
								<hr className="line"></hr>
								<h3 className="text-uppercase">Portofolio<span className="glyphicon glyphicon-folder-open title-icon"></span></h3>
								<hr className="line"></hr>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="full-height-content">
					<Container>
						<Row>
							<Col sm={12}>
								<ul className="portofolio-list text-center"></ul>
								<div className="portofolio-container text-left">
									{
										self.state.portofolio.portofolio_items.map(function(item, i){
											return (
												<Child key={i} id={"owl_carousel_"+i} template={"portofolio"} item_list={item}></Child>
											)
										})
									} 
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm={12} className="text-center">
								<div id="portofolio_links_other">
									<a id="portofolio_git" href="https://github.com/oanapopescu93" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i><span>github.com/oanapopescu93</span></a>
									<a id="portofolio_tutorials" data-toggle="modal" data-target="#myModal_tutorials"><i className="fa fa-book"></i><span>Tutorials</span></a>
								</div>
							</Col>
						</Row>
					</Container>
				</div>

				<Modal show={this.state.isOpen} onHide={this.closeModal}>
					<Modal.Header closeButton>
					<Modal.Title>Details</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="title"></div>
						<div className="platform"></div>
						<div className="used"></div>
						<div className="status"></div>
					</Modal.Body>
				</Modal>

			</div>
		);
	}
}

export default Portofolio;