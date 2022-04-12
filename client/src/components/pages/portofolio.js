import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'; 
import Carousel from './partials/carousel';
import { Modal} from "react-bootstrap";

function Child(props){     
	return (
		<Carousel template={props.template} id={props.id} item_list={props.item_list}></Carousel>
	);
}

class Portofolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			portofolio: props.data,
			isOpen: false
		};
		this.portofolio_click = this.portofolio_click.bind(this);
		this.portofolio_image_click = this.portofolio_image_click.bind(this);
	}

	openModal = () => this.setState({ isOpen: true });
  	closeModal = () => this.setState({ isOpen: false });

	portofolio_image_click(){
        let self = this;
		$('body').on('click', '.item-info img', function (e) {
			self.openModal();
			$('#myModal_portofolio .modal-body .title').empty();
			$('#myModal_portofolio .modal-body .platform').empty();
			$('#myModal_portofolio .modal-body .used').empty();
			$('#myModal_portofolio .modal-body .status').empty();

			if($(this).closest('.item-container').find('.item-more-info p.grid_link').text() !== "undefined"){
				$('#myModal_portofolio .modal-body .title').append('<a class="modal_button" href="' + $(this).closest('.item-container').find('.item-more-info p.grid_link').text() + '" target="_blank">Take a look</a>');
			} 
			
			if($(this).closest('.item-container').find('.item-more-info p.grid_git').text() !== ""){
				$('#myModal_portofolio .modal-body .platform').append('<a class="modal_button" href="' + $(this).closest('.item-container').find('.item-more-info p.grid_git').text() + '" target="_blank">See the code</a>');
			}
			
			if($(this).closest('.item-container').find('.item-more-info p.grid_platform').text() !== ""){
				$('#myModal_portofolio .modal-body .platform').append('<b>Platform: </b>' + $(this).closest('.item-container').find('.item-more-info p.grid_platform').text());
			}
			
			var text = $(this).closest('.item-container').find('.item-more-info p.grid_used').text();
			var res = text.split(", ");
			$('#myModal_portofolio .modal-body .used').append('<b>What I used: </b><br>');
			for (var i in res){
				$('#myModal_portofolio .modal-body .used').append('<span class="box">'+ res[i] +'</span>');
			}
	
			if($(this).closest('.item-container').find('.item-more-info p.grid_status').length > 0){
				$('#myModal_portofolio .modal-body .status').append('<b>Status: </b>' + $(this).closest('.item-container').find('.item-more-info p.grid_status').text());
			} 	
		});
	};

	portofolio_click(e){
		$('.portofolio-list li').removeClass('active');
		$('.portofolio-container .owl_container').hide();
		var element = $(e.target);
		element.addClass('active');		
		let order = $(e.target).attr('order')
		if($('#owl_carousel_'+order)){
			$('#owl_carousel_'+order).show();
		}
	}

	componentDidMount() {
		this.portofolio_image_click();
	}

	render() {
		let self = this;
		return (
			<>
				<Container>
					<Row>
						<Col sm={12}>
							<ul className="portofolio-list text-center">
								{
									self.state.portofolio.portofolio_list.map(function(item, i){
										let active = "";
										if(i === 0){
											active = "active"
										}
										return (
											<li key={i} order={i} className={active} onClick={(e)=>{self.portofolio_click(e)}}>{item}</li>
										)
									})
								} 
							</ul>''
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
								<Button id="portofolio_tutorials" data-toggle="modal" data-target="#myModal_tutorials"><i className="fa fa-book"></i><span>Tutorials</span></Button>
							</div>
						</Col>
					</Row>
				</Container>

				<Modal id="myModal_portofolio" className="mymodal text-center" show={self.state.isOpen} onHide={self.closeModal}>
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

			</>
		);
	}
}

export default Portofolio;