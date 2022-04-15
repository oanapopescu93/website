import React, { Component } from 'react';
import { Modal} from "react-bootstrap";
import cv_pdf from '../../files/CV - Oana Popescu.pdf';
import cv_doc from '../../files/CV - Oana Popescu.doc';
import $ from 'jquery'; 

class Cv extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen_cv: false,
		};
		this.handle_click = this.handle_click.bind(this);
        this.handle_slide = this.handle_slide.bind(this);
	}
	
	openModal_cv = () => this.setState({ isOpen_cv: true });
  	closeModal_cv = () => this.setState({ isOpen_cv: false });

    handle_click(){
        this.openModal_cv();
    }
    handle_slide(){
        if($('.mycv_container')){
            $('.mycv_container').toggleClass('closed');
        }
    }

	render() {
        return (
            <>
                <div className="mycv_container">
                    <div className="cv_close shadow_convex" onClick={()=>{this.handle_slide()}}>
                        <i className="fa fa-times"></i>
                    </div>
                    <div id="mycv" className="mycv shadow_convex" onClick={()=>{this.handle_click()}}>
                        <i className="fa fa-file"></i>
                        <p>CV</p>
                    </div>
                </div>

                <Modal id="myModal_cv" className="mymodal text-center" show={this.state.isOpen_cv} onHide={this.closeModal_cv}>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
                        <h3 className="text-uppercase" id="myModalLabel">Choose</h3>
                        <a href={cv_pdf} target = "_blank" rel="noopener noreferrer"><span className="cv-lang">PDF</span></a>
                        <a href={cv_doc} target = "_blank" rel="noopener noreferrer"><span className="cv-lang">WORD</span></a>
					</Modal.Body>
				</Modal>
            </>
        );
    }
}
export default Cv;