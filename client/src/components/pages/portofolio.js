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
			isOpen_portofolio: false,
			isOpen_tutorials: false
		};
		this.portofolio_click = this.portofolio_click.bind(this);
		this.portofolio_image_click = this.portofolio_image_click.bind(this);
		this.portofolio_tutorials_click = this.portofolio_tutorials_click.bind(this);
	}

	openModal_portofolio = () => this.setState({ isOpen_portofolio: true });
  	closeModal_portofolio = () => this.setState({ isOpen_portofolio: false });
	openModal_tutorials = () => this.setState({ isOpen_tutorials: true });
  	closeModal_tutorials = () => this.setState({ isOpen_tutorials: false });

	portofolio_image_click(){
        let self = this;
		$('body').on('click', '.item-info img', function (e) {
			self.openModal_portofolio();
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

	portofolio_tutorials_click(){
		this.openModal_tutorials();
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
							</ul>
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
								<a id="portofolio_git" href="https://github.com/oanapopescu93" rel="noopener noreferrer" target="_blank">
									<Button>
										<i className="fa fa-github"></i> <span>github.com/oanapopescu93</span>
									</Button>
								</a>
								<Button id="portofolio_tutorials" data-toggle="modal" data-target="#myModal_tutorials" onClick={()=>{this.portofolio_tutorials_click()}}>
									<i className="fa fa-book"></i> <span>Tutorials</span>
								</Button>
							</div>
						</Col>
					</Row>
				</Container>

				<Modal id="myModal_portofolio" className="mymodal text-center" show={self.state.isOpen_portofolio} onHide={self.closeModal_portofolio}>
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
				<Modal id="myModal_tutorials" className="mymodal text-center" show={self.state.isOpen_tutorials} onHide={self.closeModal_tutorials}>
					<Modal.Header closeButton>
					<Modal.Title>Tutorials</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div id="tutorial_box_container">
							{(() => {
								let tutorials = this.state.portofolio.tutorials;
								if(typeof tutorials !== "undefined" && tutorials !== null){
									if(tutorials.length>0){
										return(
											<>
												{
													tutorials.map(function(item1, i){
														return (
															<Row key={i} id={"tutorial_box_"+i}>
																<Col sm={8} className="box01">
																	<h4 className="tutorial_name">{item1.name}</h4>
																	<p>{item1.description}</p>
																	<p>What I used:</p>
																	<>
																		{
																			item1.used.map(function(item2, j){
																				return (
																					<span key={j} class="box">{item2}</span> 
																				)
																			})
																		}
																	</>
																</Col>
																<Col sm={4} className="box02">
																	<a class="tutorial_link" href={tutorials[i].link} target="_blank" rel="noopener noreferrer">Link</a>
																</Col>
															</Row>
														)
													})
												}
											</>
										)
									} else {
										return <div>No tutorials yet</div>
									}
								}
							})()}
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

export default Portofolio;