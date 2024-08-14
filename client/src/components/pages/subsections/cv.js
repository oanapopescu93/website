import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { translate } from '../../../translations/translate'
import cv_pdf from '../../../files/CV - Oana Popescu.pdf'

function Cv(props){
    const { settings } = props
    const { lang } = settings

    const [closed, setClosed] = useState('')
    
    function handleSlide(){
        if(closed === ''){
            setClosed('closed')
        } else {
            setClosed('')
        }
    }
	
    return <div className={"mycv_container " + closed}>
        <div className="cv_close shadow_convex" onClick={()=>{handleSlide()}}>x</div>
        <div id="mycv" className="mycv shadow_convex">            
            <a href={cv_pdf} target = "_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFile} /><span>{translate({lang: lang, info: "cv"})}</span>
            </a>
        </div>
    </div>
}
export default Cv