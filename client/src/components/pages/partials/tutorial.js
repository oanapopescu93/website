import React, { Component } from 'react';
import { Modal} from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'; 

class Tutorial extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen_tutorials: false,
            tutorials: props.tutorials,
		};
		this.handle_click = this.handle_click.bind(this);
		this.handle_slide = this.handle_slide.bind(this);
	}
	
	openModal_tutorials = () => this.setState({ isOpen_tutorials: true });
  	closeModal_tutorials = () => this.setState({ isOpen_tutorials: false });

    handle_click(){
        this.openModal_tutorials();
    }
	handle_slide(){
        if($('.mytutorials_container')){
            $('.mytutorials_container').toggleClass('closed');
        }
    }

	render() {
        return (
            <>
                <div className="mytutorials_container">
                    <div className="mytutorials_close shadow_convex" onClick={()=>{this.handle_slide()}}>
                        <i className="fa fa-times"></i>
                    </div>
                    <div id="mytutorials" className="mytutorials shadow_convex" onClick={()=>{this.handle_click()}}>
                        <i className="fa fa-book" data-toggle="tooltip" data-placement="left" title="" data-original-title="My tutorials"></i>
                    </div>
                </div>

                <Modal id="myModal_tutorials" className="mymodal text-center" show={this.state.isOpen_tutorials} onHide={this.closeModal_tutorials}>
					<Modal.Header closeButton>
						<Modal.Title>Tutorials</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div id="tutorial_box_container">
							{(() => {
								let tutorials = this.state.tutorials;
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
																					<span key={j} className="box">{item2}</span> 
																				)
																			})
																		}
																	</>
																</Col>
																<Col sm={4} className="box02">
																	<a className="tutorial_link" href={tutorials[i].link} target="_blank" rel="noopener noreferrer">Link</a>
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
								} else {
                                    return <div>No tutorials yet</div>
                                }
							})()}
						</div>
					</Modal.Body>
				</Modal>
            </>
        );
    }
}
export default Tutorial;