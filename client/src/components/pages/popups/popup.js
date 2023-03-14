import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tutorials from './tutorials'
import { Modal} from "react-bootstrap"
import { changePopup } from '../../reducers/popups'
import Cv from './cv'

function Popup(props){
    let open = useSelector(state => state.popups.open)
    let title = useSelector(state => state.popups.title)
    let template = useSelector(state => state.popups.template)
    let dispatch = useDispatch()

  	function closeModal(){
		dispatch(changePopup(false))
	}

    return <Modal id="myModal" className="mymodal text-center" show={open} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(() => {					
                    switch (template) {
                        case "tutorials":
                            return <Tutorials lang={props.lang}></Tutorials>
                        case "cv":
                            return <Cv lang={props.lang}></Cv>
                        default:
                            return null
                    }
                })()}
            </Modal.Body>
        </Modal>
}

export default Popup