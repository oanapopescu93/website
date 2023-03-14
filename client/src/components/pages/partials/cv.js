import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal} from "react-bootstrap"
import cv_pdf from '../../files/CV - Oana Popescu.pdf'
import cv_doc from '../../files/CV - Oana Popescu.doc'
import { changePopup } from '../../reducers/popups'

function Cv(){
    const [closed, setClosed] = useState('')
    let dispatch = useDispatch()
    
    function handleSlide(){
        if(closed === ''){
            setClosed('closed')
        } else {
            setClosed('')
        }
    }
    function handleClick(){
       dispatch(changePopup({open: true, title: "", template: "cv"}))
    }
	
    return <div className={"mycv_container " + closed}>
        <div className="cv_close shadow_convex" onClick={()=>{handleSlide()}}>
            <i className="fa fa-times"></i>
        </div>
        <div id="mycv" className="mycv shadow_convex" onClick={()=>{handleClick()}}>
            <i className="fa fa-file"></i><p>CV</p>
        </div>
    </div>
}
export default Cv