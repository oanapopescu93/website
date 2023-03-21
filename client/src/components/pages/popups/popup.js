import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tutorials from './tutorials'
import { Modal} from "react-bootstrap"
import { changePopup } from '../../reducers/popups'
import Cv from './cv'
import { translate } from '../../translations/translate'
import PortofolioDetails from './portofolioDetails'
import ContactResults from './contactResults'

function Popup(props){
    let open = useSelector(state => state.popups.open)
    let title = useSelector(state => state.popups.title)
    let template = useSelector(state => state.popups.template)
    let data = useSelector(state => state.popups.data)
    let size = useSelector(state => state.popups.size)
    if(!size){
        size = "sm"
    }
    let dispatch = useDispatch()

  	function closeModal(){
		dispatch(changePopup(false))
	}

    return <Modal id="myModal" className="mymodal text-center" show={open} onHide={closeModal} size={size}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(() => {					
                    switch (template) {
                        case "contact_results": 
                            return <ContactResults message={data}></ContactResults>
                        case "portofolio_details":
                            return <PortofolioDetails lang={props.lang} item={data}></PortofolioDetails>
                        case "tutorials":
                            return <Tutorials lang={props.lang} tutorials={data}></Tutorials>
                        case "cv":
                            return <Cv lang={props.lang}></Cv>
                        default:
                            return <p>{translate({lang: props.lang, info: "error"})}</p>
                    }
                })()}
            </Modal.Body>
        </Modal>
}

export default Popup