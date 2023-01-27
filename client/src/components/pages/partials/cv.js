import React, { useState } from 'react'
import { Modal} from "react-bootstrap"
import cv_pdf from '../../files/CV - Oana Popescu.pdf'
import cv_doc from '../../files/CV - Oana Popescu.doc'

function Cv(){
    const [isOpen, setIsOpen] = useState(false)
    const [closed, setClosed] = useState('')
	
	function openModal_cv(){setIsOpen(true)}
  	function closeModal_cv(){setIsOpen(false)}

    function handle_click(){
        openModal_cv()
    }
    function handle_slide(){
        if(closed === ''){
            setClosed('closed')
        } else {
            setClosed('')
        }
    }
	
    return (
        <>
            <div className={"mycv_container " + closed}>
                <div className="cv_close shadow_convex" onClick={()=>{handle_slide()}}>
                    <i className="fa fa-times"></i>
                </div>
                <div id="mycv" className="mycv shadow_convex" onClick={()=>{handle_click()}}>
                    <i className="fa fa-file"></i>
                    <p>CV</p>
                </div>
            </div>

            <Modal id="myModal_cv" className="mymodal text-center" show={isOpen} onHide={closeModal_cv}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <h3 className="text-uppercase" id="myModalLabel">Choose</h3>
                    <a href={cv_pdf} target = "_blank" rel="noopener noreferrer"><span className="cv-lang">PDF</span></a>
                    <a href={cv_doc} target = "_blank" rel="noopener noreferrer"><span className="cv-lang">WORD</span></a>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Cv